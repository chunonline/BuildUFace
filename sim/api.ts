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
     * Test on
     */
    //% block="meow test %param" blockId=meow_test
    //% blockGap=8 weight=54

    export function meowTest(input: number, meow?: () => void,  meow2?: () => void) {
        //console.log("I'm In!");
        //body();
        console.log("===== this is meow1");
        if (meow) {
            console.log(meow);
        }
        console.log("===== this is meow2");
        if (meow2) {
            console.log(meow2);
        }
    }

    /**
     * Test In
     */
    //% block="inner" blockId=inner
    //% weight=90
    export function innerTest() {
        console.log("Inner");
        //return Promise.delay(100);
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
    export function faceSubstitutionLoopAsync(face: faceSubType) {
        switch (face) {
            case faceSubType.average:
                return faceDetector().loadFaceSubstitution("sub-average");
            case faceSubType.terminator:
                return faceDetector().loadFaceSubstitution("sub-terminator");
            case faceSubType.walter:
                return faceDetector().loadFaceSubstitution("sub-walter");
            case faceSubType.clooney:
                return faceDetector().loadFaceSubstitution("sub-clooney");
            case faceSubType.bieber:
                return faceDetector().loadFaceSubstitution("sub-bieber");
            case faceSubType.kim:
                return faceDetector().loadFaceSubstitution("sub-kim");
            case faceSubType.rihanna:
                return faceDetector().loadFaceSubstitution("sub-rihanna");
            case faceSubType.audrey:
                return faceDetector().loadFaceSubstitution("sub-audrey");
            case faceSubType.bill:
                return faceDetector().loadFaceSubstitution("sub-bill");
            case faceSubType.connery:
                return faceDetector().loadFaceSubstitution("sub-connery");
            case faceSubType.cage:
                return faceDetector().loadFaceSubstitution("sub-cage");
            case faceSubType.queen:
                    return faceDetector().loadFaceSubstitution("sub-queen");
            case faceSubType.obama:
                return faceDetector().loadFaceSubstitution("sub-obama");
            case faceSubType.chuck:
                return faceDetector().loadFaceSubstitution("sub-chuck");
            case faceSubType.monalisa:
                return faceDetector().loadFaceSubstitution("sub-monalisa");
            case faceSubType.scream:
                return faceDetector().loadFaceSubstitution("sub-scream");

            default:
                return Promise.delay(100);
        }

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