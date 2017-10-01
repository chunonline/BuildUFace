/// <reference path="../node_modules/pxt-core/typings/globals/bluebird/index.d.ts"/>
/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts"/>

/* -----------------------------------------
    Declare the usage of clmtrackr library.
-------------------------------------------- */
declare var clm: any;







/* -----------------------------------------
    Initialize video & clmtrackr library only once
 -------------------------------------------- */

let VIDEO: any = <any>document.getElementById('videoel');
let OVERLAY: any = <any>document.getElementById('overlay');
let CLM: any = <any>clm;

// Get video
navigator.getUserMedia({video : true}, function(stream: any) {
    VIDEO.src = window.URL.createObjectURL(stream);
    VIDEO.play();
}.bind(this), function() {
    //alert("There was some problem trying to fetch video from your webcam");
});

// Initialize tracker;
let CLM_TRACKR: any =  <any>new CLM.tracker();
CLM_TRACKR.init();
CLM_TRACKR.start(VIDEO);

/* -----------------------------------------
    End of initialization
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
        runtime.board = new FaceDetector(VIDEO, OVERLAY, CLM, CLM_TRACKR);
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
        public clm: any;
        public clmtrackr: any;

        constructor(video: any, overlay: any, clm: any, clmtrackr: any) {
            super();
            this.video = video;
            this.video_width = this.video.width;
            this.video_height = this.video.height;
            this.overlay = overlay;
            this.overlayCC = <any>this.overlay.getContext('2d');
            this.clm = <any>clm;

            this.clmtrackr =  clmtrackr;
        }

        clearCanvas() {
            this.overlayCC.clearRect(0, 0, this.video_width, this.video_height);
        }

        drawFaceOutline() {
            this.clearCanvas();
            if (this.clmtrackr.getCurrentPosition()) {
                this.clmtrackr.draw(this.overlay);
            }
            return Promise.delay(100);
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