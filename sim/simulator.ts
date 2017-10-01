/// <reference path="../node_modules/pxt-core/typings/globals/bluebird/index.d.ts"/>
/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts"/>

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
        runtime.board = new FaceDetector();
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
        public vid: any;
        public vid_width: number;
        public vid_height: number;
        public overlay: any;
        public overlayCC: any;

        public clm: any;
        public clmtrackr: any;
        public facePositionArray : Array<Array<number>>;

        constructor() {
            super();
            this.vid = <any>document.getElementById('videoel');
            this.vid_width = this.vid.width;
            this.vid_height = this.vid.height;
            this.overlay = <any>document.getElementById('overlay');
            this.overlayCC = <any>this.overlay.getContext('2d');
            //this.clm = <any>clm;
        }

        //drawLoop() {
        //    requestAnimationFrame(this.drawLoop);
        //    this.overlayCC.clearRect(0, 0, this.vid_width, this.vid_height);
        //    if (this.clmtrackr.getCurrentPosition()) {
        //        this.clmtrackr.draw(this.overlay);
        //    }
        //    return Promise.delay(400);
        //}

        drawLoop() {
            // do nothing
            return Promise.delay(400);
        }

        //gumSuccess(stream: any) {
        //    // add camera stream if getUserMedia succeeded
        //    this.vid.src = window.URL.createObjectURL(stream);
        //    this.vid.play();
        //}
        //
        //gumFail() {
        //    alert("There was some problem trying to fetch video from your webcam");
        //}

        initAsync(msg: pxsim.SimulatorRunMessage): Promise<void> {

            // window.URL = window.URL || window.webkitURL || window.msURL || window.mozURL;
            // Get video
            navigator.getUserMedia({video : true}, function(stream: any) {
                this.vid.src = window.URL.createObjectURL(stream);
                this.vid.play();
            }.bind(this), function() {
                //alert("There was some problem trying to fetch video from your webcam");
            });
            /*
            this.clmtrackr =  this.clm.tracker();
            this.clmtrackr.init();
            this.clmtrackr.start(this.vid);

            this.drawLoop();
            */
            return Promise.resolve();
        }

        updateView() {
        }
    }
}