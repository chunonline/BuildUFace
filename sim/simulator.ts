/// <reference path="../node_modules/pxt-core/typings/globals/bluebird/index.d.ts"/>
/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts"/>
/// <reference path="../sim/canvas-datapoints.ts"/>

/* -----------------------------------------
    Declare the usage of clmtrackr library.
    Initialize video & clmtrackr library only once
-------------------------------------------- */
import FaceDetector = pxsim.FaceDetector;
declare var clm: any;
declare var faceDeformer: any;
declare var pModel: any;
declare var Poisson: any;
declare var emotionModel: any;
declare var emotionClassifier: any;

interface Navigator {
    getUserMedia(
        options: { video?: boolean; audio?: boolean; },
        success: (stream: any) => void,
        error?: (error: string) => void
    ) : void;
}

// Get Video Elements
let VIDEO: any = <any>document.getElementById('videoel');
let OVERLAY: any = <any>document.getElementById('overlay');
let WEBGL: any = <any>document.getElementById('webgl');
let WEBGL_2: any = <any>document.getElementById('webgl2');
let P_MODEL: any = <any>pModel;
let POISSON: any = <any> Poisson;
let VID_WIDTH: number = 400;
let VID_HEIGHT: number = 300;

// set eigenvector 9 and 11 to not be regularized. This is to better detect motion of the eyebrows
P_MODEL.shapeModel.nonRegularizedVectors.push(9);
P_MODEL.shapeModel.nonRegularizedVectors.push(11);

// Initialize tracker;
let CLM_TRACKR: any =  <any>new clm.tracker({useWebGL : true});
let FACE_DEFORMER: any = <any>new faceDeformer();
let FACE_DEFORMER_2: any = <any>new faceDeformer();
let EMOTION_CLASSIFIER = <any>new emotionClassifier();

// Face substitution canvases
let faceSubImageCanvases: any = {};


/* -----------------------------------------
    Setup drawing canvas for face substitution
 -------------------------------------------- */
// canvas for copying the warped face to
let NEW_CANVAS: any = document.createElement('CANVAS');
NEW_CANVAS.width = VID_WIDTH;
NEW_CANVAS.height = VID_HEIGHT;
// canvas for copying videoframes to
let VIDEO_CANVAS: any = document.createElement('CANVAS');
VIDEO_CANVAS.width = VID_WIDTH;
VIDEO_CANVAS.height = VID_HEIGHT;
// canvas for masking
let FACE_SUB_CANVAS: any = document.createElement('CANVAS');
FACE_SUB_CANVAS.width = VID_WIDTH;
FACE_SUB_CANVAS.height = VID_HEIGHT;


/* ------------------------------------------
    Start Video
 ------------------------------------------ */
navigator.getUserMedia({video : true}, gumSuccess.bind(this), gumFailed);






/* -----------------------------------------
    Load face substitution images
 -------------------------------------------- */
// This function load inidividual face substitution masks
function loadFaceSubMask(index: number) {
    let mask = new Image();
    mask.onload = function(obj: any){
        var elementId = SUBSTITUTION_IMAGES[index].id;
        //var elementId = 'sub-average';

        // copy the images to canvases
        let childSubImage: any = document.createElement('CANVAS');
        childSubImage.width = obj.target.width;
        childSubImage.height = obj.target.height;
        childSubImage.getContext('2d').drawImage(obj.target,0,0);
        faceSubImageCanvases[elementId] = childSubImage;
    };
    mask.src = SUBSTITUTION_IMAGES[index].path;
}

// This function loads whole masks media library
function loadFaceSubMasksLibrary() {
    for (var i = 0; i < SUBSTITUTION_IMAGES.length; i++) {
        loadFaceSubMask(i);
    }
}


/* ------------------------------------------
    Video success / fail handler
 ------------------------------------------ */
function gumSuccess(stream: any) {
    VIDEO.src = window.URL.createObjectURL(stream);
    VIDEO.play();

    // Start Tracking
    CLM_TRACKR.init(P_MODEL);
    EMOTION_CLASSIFIER.init(emotionModel);
    CLM_TRACKR.start(VIDEO);
    FACE_DEFORMER.init(WEBGL);
    FACE_DEFORMER_2.init(WEBGL_2);

    // Load face substitution library
    loadFaceSubMasksLibrary();
}

function gumFailed() {
    console.log("There was some problem trying to fetch video from your webcam");
}


namespace pxsim {
    /**
     * This function gets called each time the program restarts
     */
    initCurrentRuntime = () => {
        runtime.board = new FaceDetector(VIDEO, OVERLAY, WEBGL, WEBGL_2, CLM_TRACKR);
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
        public webGL2: any;
        public webGLContext: any;
        public webGLContext2: any;
        public clmtrackr: any;
        public curFaceSubMask: string;
        public mask: string;
        public deform_parameters: number[];
        private convergenceRatio: number = 0.6;
        private shouldContinueMask:boolean = false;
        private animationFrame:any;
        public bus: pxsim.EventBus;
        
        constructor(video: any, overlay: any, webgl: any, webgl2: any, clmtrackr: any) {
            super();
            this.video = video;
            this.video_width = VID_WIDTH;
            this.video_height = VID_HEIGHT;
            this.overlay = overlay;
            this.overlayCC = <any>this.overlay.getContext('2d');
            this.webGL = webgl;
            this.webGL2 = webgl2;
            this.webGLContext = this.webGL.getContext('webgl');
            this.webGLContext2 = this.webGL2.getContext('webgl');
            this.clmtrackr =  clmtrackr;
            this.bus = new pxsim.EventBus(runtime);
        }

        clearCanvas() {
            this.overlayCC.clearRect(0, 0, this.video_width, this.video_height);

            this.webGLContext.clearColor(0.0, 0.0, 0.0, 0.0);
            this.webGLContext.clear(this.webGLContext.COLOR_BUFFER_BIT);

            this.webGLContext2.clearColor(0.0, 0.0, 0.0, 0.0);
            this.webGLContext2.clear(this.webGLContext2.COLOR_BUFFER_BIT);
        }

        // This function get face emotion
        getFaceEmotion() {
            let cp = this.clmtrackr.getCurrentParameters();
            var er = EMOTION_CLASSIFIER.meanPredict(cp);
            return er;
        }

        hasEmotion(sentimentList:any[], emotionName:string) {
            for (let eachEmotion of sentimentList) {
                if (eachEmotion.emotion == emotionName &&
                    eachEmotion.value > 0.3) {
                    return true;
                }
            }
            return false;
        }

        /**
         * Detect Sentiment
         */
        //let lastSentiment: Sentiment;
        //% weight=100
        //% blockId=detectSentiment block="detect sentiment"
        detectSentiment() {
        let sentiment = faceDetector().getFaceEmotion();
            if(faceDetector().hasEmotion(sentiment, "happy")) {
                faceDetector().bus.queue("sentiment", Sentiment.Happy);
            }
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

            // get current mask
            FACE_DEFORMER.load(document.getElementById(this.mask), MASKS[this.mask], P_MODEL);

            let positions = this.clmtrackr.getCurrentPosition();
            if (positions) {
                // draw mask on top of face
                FACE_DEFORMER.draw(positions);
            }
            return Promise.delay(100);
        }

        // This function load face substitution
        drawFaceSubstitutionAsync(face: string) {
            this.curFaceSubMask = face;

            let positions = this.clmtrackr.getCurrentPosition();
            this.subSwitchMasks(positions);
            return Promise.resolve();
        }


        subSwitchMasks(pos: any) {
            VIDEO_CANVAS.getContext('2d').drawImage(this.video,0,0, VIDEO_CANVAS.width, VIDEO_CANVAS.height);

            // we need to extend the positions with new estimated points in order to get pixels immediately outside mask
            var newMaskPos = SUBSTITUTION_ANCHORPOINTS[this.curFaceSubMask].slice(0);
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
            var newVertices = P_MODEL.path.vertices.concat(FACE_SUB_EXTENDED_VERTICES);

            // deform the mask we want to use to face form
            FACE_DEFORMER_2.load(faceSubImageCanvases[this.curFaceSubMask], newMaskPos, P_MODEL, newVertices);
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
            POISSON.load(NEW_CANVAS, VIDEO_CANVAS, FACE_SUB_CANVAS, function() {
                var result = POISSON.blend(30, 0, 0);
                // render to canvas
                NEW_CANVAS.getContext('2d').putImageData(result, 0, 0);
                FACE_DEFORMER.load(NEW_CANVAS, pos, P_MODEL);
                requestAnimationFrame(this.subDrawMaskLoop.bind(this));
            }.bind(this));
        }

        subDrawMaskLoop() {
            //requestAnimationFrame(this.subDrawMaskLoop.bind(this));
            // get position of face
            let positions = this.clmtrackr.getCurrentPosition();

            if (positions) {
                // draw mask on top of face
                FACE_DEFORMER.draw(positions);
            }
        }

        loadFaceDeformAsync(deform_parameters: number[]) {
            this.deform_parameters = deform_parameters;

            this.deformDrawMask();
            return Promise.delay(100);
        }

        getMaskConvergence():number {
            console.log("Face Tracking Convergence: " + this.clmtrackr.getConvergence());
            return this.clmtrackr.getConvergence();
        }


        deformDrawMask() {
            VIDEO_CANVAS.getContext('2d').drawImage(this.video, 0, 0, VIDEO_CANVAS.width, VIDEO_CANVAS.height);

            let pos = this.clmtrackr.getCurrentPosition();

            if (pos) {
                // create additional points around face
                let tempPos:any;
                let addPos:any[] = [];
                for (var i = 0;i < 23;i++) {
                    tempPos = [];
                    tempPos[0] = (pos[i][0] - pos[62][0])*1.3 + pos[62][0];
                    tempPos[1] = (pos[i][1] - pos[62][1])*1.3 + pos[62][1];
                    addPos.push(tempPos);
                }
                // merge with pos
                let newPos = pos.concat(addPos);

                let newVertices = P_MODEL.path.vertices.concat(FACE_DEFORM_MOUTH_VERTICES);
                // merge with newVertices
                newVertices = newVertices.concat(FACE_DEFORM_EXTENDED_VERTICES);

                FACE_DEFORMER.load(VIDEO_CANVAS, newPos, P_MODEL, newVertices);

                let parameters = this.clmtrackr.getCurrentParameters();
                let eig:any;
                for (var i = 0;i < this.deform_parameters.length;i++) {
                    //eig = -5*Math.sqrt(pModel.shapeModel.eigenValues[i])*3;
                    parameters[i + 5] += this.deform_parameters[i];
                }
                let positions = this.clmtrackr.calculatePositions(parameters);

                //this.clearCanvas();
                this.overlayCC.clearRect(0, 0, this.video_width, this.video_height);

                if (positions) {
                    // add positions from extended boundary, unmodified
                    newPos = positions.concat(addPos);
                    // draw mask on top of face
                    FACE_DEFORMER.draw(newPos);
                }
            }
        }

        keepContinue() {
            this.shouldContinueMask = true;
        }

        stopContinue() {
            this.clearCanvas();
            this.shouldContinueMask = false;
            cancelAnimationFrame(this.animationFrame);
            console.log("STOP animation frame: " + this.animationFrame);
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
    }
}