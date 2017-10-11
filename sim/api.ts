/// <reference path="../libs/core/enums.d.ts"/>


/**
 * Enum for masks
 */
enum maskType {
    ironman,
    average,
    monalisa,
    sean,
    skull,
    andrew,
    cage
}

enum numberSelection {
    one=1,
    two=2,
    three=3
}



namespace pxsim.faceAR {

    /**
     * Draw face outline
     */
    //% weight=90
    //% block
    export function drawFaceOutlineAsync() {
        return faceDetector().drawFaceOutlineAsync();
    }



    /**
     * Add masks to faces
     */
    //% weight=90
    //% block
    export function drawIronmanMasksAsync() {
        return faceDetector().drawFaceMasksAsync('ironman');
    }

    /**
     * Add masks to faces
     */
    //% weight=90
    //% block
    export function drawAudreyMasksAsync() {
        return faceDetector().drawFaceMasksAsync('audrey');
    }

    /**
     * Add masks to faces
     */
    //% weight=90
    //% block
    export function drawAverageMasksAsync() {
        return faceDetector().drawFaceMasksAsync('average');
    }

    /**
     * Add masks to faces
     */
    //% weight=90
    //% block
    export function drawNicolasCageMasksAsync() {
        return faceDetector().drawFaceMasksAsync('cage2');
    }

    /**
     * Add masks to faces
     */
    //% weight=90
    //% block
    export function drawMonaLisaMasksAsync() {
        return faceDetector().drawFaceMasksAsync('joconde');
    }

    /**
     * Add masks to faces
     */
    //% weight=90
    //% block
    export function drawSeanConneryMasksAsync() {
        return faceDetector().drawFaceMasksAsync('SeanConnery');
    }

    /**
     * Add masks to faces
     */
    //% weight=90
    //% block
    export function drawSkullMasksAsync() {
        return faceDetector().drawFaceMasksAsync('skull');
    }





    ////% weight=90
    ////% blockId=device_show_string
    ////% block="mmmm %v"
    //export function showMumber(meow: string): void
    //{ }
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
    //%
}