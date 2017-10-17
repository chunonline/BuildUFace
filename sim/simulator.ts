/// <reference path="../node_modules/pxt-core/typings/globals/bluebird/index.d.ts"/>
/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts"/>
/// <reference path="../sim/canvas-datapoints.ts"/>

/* -----------------------------------------
    Declare the usage of clmtrackr library.
-------------------------------------------- */
declare var clm: any;
declare var faceDeformer: any;
declare var pModel: any;
declare var Poisson: any;
//declare var requestAnimationFrame: any;


/* -----------------------------------------
    Initialize video & clmtrackr library only once
 -------------------------------------------- */

let VIDEO: any = <any>document.getElementById('videoel');
let OVERLAY: any = <any>document.getElementById('overlay');
let WEBGL: any = <any>document.getElementById('webgl');
let WEBGL_2: any = <any>document.getElementById('webgl2');
let CLM: any = <any>clm;
let vid_width: number = 400;
let vid_height: number = 300;

// Get video
navigator.getUserMedia({video : true}, function(stream: any) {
    VIDEO.src = window.URL.createObjectURL(stream);
    VIDEO.play();
}.bind(this), function() {
    //alert("There was some problem trying to fetch video from your webcam");
});

// Initialize tracker;
let CLM_TRACKR: any =  <any>new CLM.tracker();
let FACE_DEFORMER: any = <any>new faceDeformer();
let FACE_DEFORMER_2: any = <any>new faceDeformer();
CLM_TRACKR.init(pModel);
CLM_TRACKR.start(VIDEO);
FACE_DEFORMER.init(WEBGL);
FACE_DEFORMER_2.init(WEBGL_2);


/* -----------------------------------------
    Setup drawing canvas
 -------------------------------------------- */
// canvas for copying the warped face to
let NEW_CANVAS: any = document.createElement('CANVAS');
//let NEW_CANVAS: any = document.getElementById('new-canvas');
NEW_CANVAS.width = vid_width;
NEW_CANVAS.height = vid_height;
// canvas for copying videoframes to
let VIDEO_CANVAS: any = document.createElement('CANVAS');
// let VIDEO_CANVAS: any = document.getElementById('video-canvas');
VIDEO_CANVAS.width = vid_width;
VIDEO_CANVAS.height = vid_height;
// canvas for masking
let FACE_SUB_CANVAS: any = document.createElement('CANVAS');
// let FACE_SUB_CANVAS: any = document.getElementById('face-sub-canvas');
FACE_SUB_CANVAS.width = vid_width;
FACE_SUB_CANVAS.height = vid_height;



/* -----------------------------------------
    Load face substitution library
 -------------------------------------------- */
let faceSubImageCanvases: any = {};
// This function load inidividual face substitution masks
function loadFaceSubMask(index: number) {
    let mask = new Image();
    mask.onload = function(obj: any){
        //var elementId = SUBSTITUTION_IMAGES[index].id;
        var elementId = 'sub-terminator';

        // copy the images to canvases
        // let childSubImage: any = document.getElementById('sub-average');
        let childSubImage: any = document.createElement('CANVAS');
        childSubImage.width = obj.target.width;
        childSubImage.height = obj.target.height;
        childSubImage.getContext('2d').drawImage(obj.target,0,0);
        faceSubImageCanvases[elementId] = childSubImage;
        //this.faceSubImageCount += 1;
//                if ( this.faceSubImageCount == SUBSTITUTION_IMAGES.length) {
//                    this.faceSubImageReady = true;
//                }
    };
    mask.src = SUBSTITUTION_IMAGES[index].path;
}

// This function loads whole masks media library
function loadFaceSubMasksLibrary() {
    //for (var i = 0; i < SUBSTITUTION_IMAGES.length; i++) {
    //    this.loadFaceSubMask(i);
    //}
    loadFaceSubMask(0);
}

loadFaceSubMasksLibrary();


/* -----------------------------------------
     Face Detector main logic
 -------------------------------------------- */

interface Navigator {
    getUserMedia(
        options: { video?: boolean; audio?: boolean; },
        success: (stream: any) => void,
        error?: (error: string) => void
    ) : void;
}

namespace pxsim {
    /**
     * This function gets called each time the program restarts
     */
    initCurrentRuntime = () => {
        runtime.board = new FaceDetector(VIDEO, OVERLAY, WEBGL, CLM, CLM_TRACKR);
    };

    /**
     * Gets the current 'board', eg. program state.
     */
    export function faceDetector() : FaceDetector {
        return runtime.board as FaceDetector;
    }

    /**
     * Represents the entire state of the executing program.
     * Do not store state anywhere else!
     */
    export class FaceDetector extends pxsim.BaseBoard{
        public video: any;
        public video_width: number;
        public video_height: number;
        public overlay: any;
        public overlayCC: any;
        public webGL: any;
        public webGLContext: any;
        public clm: any;
        public clmtrackr: any;
        public faceSubImageCount: number;
        public faceSubImageReady: boolean;
        public curFaceSubMask: number;
        public mask: string;

        constructor(video: any, overlay: any, webgl: any, clm: any, clmtrackr: any) {
            super();
            this.video = video;
            this.video_width = vid_width;
            this.video_height = vid_height;
            this.overlay = overlay;
            this.overlayCC = <any>this.overlay.getContext('2d');
            this.webGL = webgl;
            this.webGLContext = this.webGL.getContext('webgl');
            this.clm = <any>clm;
            this.clmtrackr =  clmtrackr;
            this.faceSubImageCount = 0;
            this.faceSubImageReady = false;
            this.curFaceSubMask = 0;
        }

        clearCanvas() {
            this.overlayCC.clearRect(0, 0, this.video_width, this.video_height);
            this.webGLContext.clearColor(0.0, 0.0, 0.0, 0.0);
            this.webGLContext.clear(this.webGLContext.COLOR_BUFFER_BIT);
        }

        // This function draws face outline
        drawFaceOutlineAsync() {
            this.clearCanvas();
            if (this.clmtrackr.getCurrentPosition()) {
                this.clmtrackr.draw(this.overlay);
            }
            return Promise.delay(100);
        }

        // This function draws a Mask
        drawFaceMasksAsync(mask: string) {
            this.mask = mask;
            this.masksDrawGridLoop();
            return Promise.delay(100);
        }

        masksDrawGridLoop() {
            let positions = this.clmtrackr.getCurrentPosition();
            this.overlayCC.clearRect(0, 0, this.video_width, this.video_height);
            if (positions) {
                // draw current grid
                this.clmtrackr.draw(this.overlay);
            }

            let pn = this.clmtrackr.getConvergence();
            if (pn < 0.4) {
                this.masksSwitchMasks(this.mask);
                requestAnimationFrame(this.masksDrawMaskLoop.bind(this));
            } else {
                requestAnimationFrame(this.masksDrawGridLoop.bind(this));
            }
        }

        masksDrawMaskLoop() {
            // get position of face
            let positions = this.clmtrackr.getCurrentPosition();
            this.overlayCC.clearRect(0, 0, vid_width, vid_height);
            if (positions) {
                // draw mask on top of face
                FACE_DEFORMER.draw(positions);
            }
            requestAnimationFrame(this.masksDrawMaskLoop.bind(this));
        }

        masksSwitchMasks(mask: string) {
            FACE_DEFORMER.load(document.getElementById(mask), MASKS[mask], pModel);
        }

        // This function load face substitution
        loadFaceSubstitution() {
            //this.clearCanvas();
            //var positions = this.clmtrackr.getCurrentPosition();
            //if (positions) {
            //    this.clmtrackr.draw(this.overlay);
            //    this.renderFaceSubstitution(positions);
            //}
            this.subDrawGridLoop();
            return Promise.resolve();
        }

        subDrawGridLoop() {
            // get position of face
            let positions = this.clmtrackr.getCurrentPosition();

            this.overlayCC.clearRect(0, 0, vid_width, vid_height);
            if (positions) {
                // draw current grid
                this.clmtrackr.draw(this.overlay);
            }
            // check whether mask has converged
            var pn = this.clmtrackr.getConvergence();
            if (pn < 0.4) {
                this.subSwitchMasks(positions);
            } else {
                requestAnimationFrame(this.subDrawGridLoop.bind(this));
            }
        }

        subSwitchMasks(pos: any) {
            VIDEO_CANVAS.getContext('2d').drawImage(this.video,0,0, VIDEO_CANVAS.width, VIDEO_CANVAS.height);

            // we need to extend the positions with new estimated points in order to get pixels immediately outside mask
            // var newMaskPos = SUBSTITUTION_ANCHORPOINTS[images[currentMask].id].slice(0);
            var newMaskPos = SUBSTITUTION_ANCHORPOINTS['sub-terminator'].slice(0);
            var newFacePos = pos.slice(0);
            var extInd = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,22,21,20,19];
            var newp: any;
            for (var i = 0;i < 23;i++) {
                newp = [];
                newp[0] = (newMaskPos[extInd[i]][0]*1.3) - (newMaskPos[62][0]*0.3);// short for ((newMaskPos[extInd[i]][0]-newMaskPos[62][0])*1.1)+newMaskPos[62][0]
                newp[1] = (newMaskPos[extInd[i]][1]*1.3) - (newMaskPos[62][1]*0.3);
                newMaskPos.push(newp);
                newp = [];
                newp[0] = (newFacePos[extInd[i]][0]*1.3) - (newFacePos[62][0]*0.3);
                newp[1] = (newFacePos[extInd[i]][1]*1.3) - (newFacePos[62][1]*0.3);
                newFacePos.push(newp);
            }
            // also need to make new vertices incorporating area outside mask
            var newVertices = pModel.path.vertices.concat(FACE_SUB_EXTENDED_VERTICES);

            // deform the mask we want to use to face form
            FACE_DEFORMER_2.load(faceSubImageCanvases['sub-terminator'], newMaskPos, pModel, newVertices);
            FACE_DEFORMER_2.draw(newFacePos);
            // and copy onto new canvas
            NEW_CANVAS.getContext('2d').drawImage(document.getElementById('webgl2'),0,0);

            // create masking
            let positions = this.clmtrackr.getCurrentPosition();
            let tempcoords = positions.slice(0,18);
            tempcoords.push(positions[21]);
            tempcoords.push(positions[20]);
            tempcoords.push(positions[19]);
            this.createMasking(FACE_SUB_CANVAS, tempcoords);

            // do poisson blending
            Poisson.load(NEW_CANVAS, VIDEO_CANVAS, FACE_SUB_CANVAS, function() {
                var result = Poisson.blend(30, 0, 0);
                // render to canvas
                NEW_CANVAS.getContext('2d').putImageData(result, 0, 0);
                // get mask

                FACE_DEFORMER.load(NEW_CANVAS, pos, pModel);
                requestAnimationFrame(this.subDrawMaskLoop.bind(this));
            }.bind(this));
        }

        subDrawMaskLoop() {
            requestAnimationFrame(this.subDrawMaskLoop.bind(this));
            // get position of face
            let positions = this.clmtrackr.getCurrentPosition();

            this.overlayCC.clearRect(0, 0, vid_width, vid_height);
            if (positions) {
                // draw mask on top of face
                FACE_DEFORMER.draw(positions);
            }
        }

        // This function creates masks
        createMasking(canvas: any, modelpoints: any) {
            // fill canvas with black
            var cc = canvas.getContext('2d');
            cc.fillStyle="#000000";
            cc.fillRect(0,0,canvas.width, canvas.height);
            cc.beginPath();
            cc.moveTo(modelpoints[0][0], modelpoints[0][1]);
            for (var i = 1;i < modelpoints.length;i++) {
                cc.lineTo(modelpoints[i][0], modelpoints[i][1]);
            }
            cc.lineTo(modelpoints[0][0], modelpoints[0][1]);
            cc.closePath();
            cc.fillStyle="#ffffff";
            cc.fill();
        }

        initAsync(msg: pxsim.SimulatorRunMessage): Promise<void> {
            this.clearCanvas();
            return Promise.resolve();
        }

        updateView() {
            this.clearCanvas();
        }
    }
}