/// <reference path="../libs/core/enums.d.ts"/>





namespace pxsim.faceAR {

    /**
     * Draw face outline
     */
    //% weight=90
    //% block
    export function drawFaceOutlineOnceAsync() {
        return faceDetector().drawFaceOutlineAsync();
    }


    /**
     * Add MASKS to faces
     */
    //% weight=90
    //% block
    export function drawMasksLoopAsync(mask: maskType) {
        switch (mask) {
            case maskType.ironman:
                return faceDetector().drawFaceMasksAsync('ironman');

            case maskType.audrey:
                return faceDetector().drawFaceMasksAsync('audrey');

            case maskType.average:
                return faceDetector().drawFaceMasksAsync('average');

            case maskType.nicolas_cage:
                return faceDetector().drawFaceMasksAsync('cage2');

            case maskType.monalisa:
                return faceDetector().drawFaceMasksAsync('joconde');

            case maskType.sean_connery:
                return faceDetector().drawFaceMasksAsync('SeanConnery');

            case maskType.skull:
                return faceDetector().drawFaceMasksAsync('skull');

            default:
                return Promise.delay(100);
        }
    }

    /**
     * Face substitution
     */
    //% weight=90
    //% block
    export function loadFaceSubstitutionLoopAsync() {
        return faceDetector().loadFaceSubstitution();
    }
}

namespace pxsim.loops {

    /**
     * Repeats the code forever in the background. On each iteration, allows other code to run.
     * @param body the code to repeat
     */
    //% help=functions/forever weight=55 blockGap=8
    //% blockId=device_forever block="forever" 
    export function forever(body: RefAction): void {
        thread.forever(body)
    }

    /**
     * Pause for the specified time in milliseconds
     * @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000
     */
    //% help=functions/pause weight=54
    //% block="pause (ms) %pause" blockId=device_pause
    export function pauseAsync(ms: number) {
        return Promise.delay(ms);
    }
}

function logMsg(m:string) { console.log(m) }

namespace pxsim.console {
    /**
     * Print out message
     */
    //% 
    export function log(msg:string) {
        logMsg("CONSOLE: " + msg);
        // why doesn't that work?
        faceDetector().writeSerial(msg + "\n");
    }
}

namespace pxsim {
    /**
     * A ghost on the screen.
     */
}