/// <reference path="../libs/core/enums.d.ts"/>

namespace pxsim.gaming {
    /**
     * Drop ball
     */
    //% weight=100
    //% blockId=onballdrop block="on ball drop"
    export function onBallDrop(handler: RefAction) {
        runtimeStateFactory().dropDown();
    }
}

namespace pxsim.detector {
    /**
     * Act on sentiment
     *
     * @param sentiment
     * @param handler
     */
    //% weight=100
    //% blockId=onsentiment block="on sentiment %sentiment"
    export function onSentiment(sentiment: Sentiment, handler: RefAction) {
        runtimeStateFactory().isOnDetecting = true;
        runtimeStateFactory().bus.listen("sentiment", sentiment, handler);
    }

    /**
     * Act on sentiment
     *
     * @param gender
     * @param handler
     */
    //% weight=100
    //% blockId=ongender block="on gender %gender"
    export function onGender(gender: Gender, handler: RefAction) {
        runtimeStateFactory().isOnDetecting = true;
        runtimeStateFactory().bus.listen("gender", gender, handler);
    }

    /**
     * Act on mouth open or close
     *
     * @param mouthStatus
     * @param hander
     */
    //% weight=100
    //% blockId=onmouthstatus block="on mouth %mouthStatus"
    export function onMouthStatus(mouthStatus: MouthStatus, handler: RefAction) {
        runtimeStateFactory().isOnDetecting = true;
        runtimeStateFactory().bus.listen("mouthStatus", mouthStatus, handler);
    }

    /**
     * Detect sentiment
     */
    //%
    export function detectSentiment() {
        let sentimentList = runtimeStateFactory().getFaceEmotionList();

        if (sentimentList && sentimentList.length != 0) {
            let currentSentiment:SentimentPair = runtimeStateFactory().getTopEmotion(sentimentList);

            if (currentSentiment.value > runtimeStateFactory().faceEmotionThreshold) {
                runtimeStateFactory().bus.queue("sentiment", currentSentiment.sentiment);
            }
        }
    }

    /**
     * Detect MouthStatus
     */
    //%
    export function detectMouthStatus() {
        if (runtimeStateFactory().isMouthOpen()) {
            runtimeStateFactory().bus.queue("mouthStatus", MouthStatus.Open);
        } else {
            runtimeStateFactory().bus.queue("mouthStatus", MouthStatus.Close);
        }
    }

    /**
     * Detect Gender
     */
    //%
    export function detectGender() {
        let genderList = runtimeStateFactory().getGenderPredictionList();
        if (genderList && genderList.length != 0) {
            let topGender = runtimeStateFactory().getTopGender(genderList);

            runtimeStateFactory().bus.queue("gender", topGender);
        }
    }

    /**
     * isFaceLeanLeft
     *
     * @param leftRight
     */
    //% weight=100
    //% blockId=isFaceLeanLeft block="face lean %leftRight"
    export function faceLean(leftRight:LeftRight):boolean {
        if (leftRight == LeftRight.Left) {
            return runtimeStateFactory().isFaceLeanLeft();
        } else {
            return runtimeStateFactory().isFaceLeanRight();
        }

    }

    /**
     * get face center X position
     *
     */
    //% weight=100
    //% blockId=getFaceHorizontalPosition block="get face horizontal position"
    export function getFaceXPosition():number {
        return runtimeStateFactory().getFaceCenterXPosition();
    }

    /**
     * get face center Y position
     *
     */
    //% weight=100
    //% blockId=getFaceVerticalPosition block="get face vertical position"
    export function getFaceYPosition():number {
        return runtimeStateFactory().getFaceCenterYPosition();
    }

    /*
     * Tracking convergence
     *
     * This function indicates how well the face is being tracked.
     * The smaller the number, the better the tracking results.
     * */
    //% block="Get Tracking Convergence" blockId="get_track_conv"
    //% weight=90
    export function getTrackingConvergence():number {
        return runtimeStateFactory().getMaskConvergence();
    }
}

namespace pxsim.augmentedReality {

    /**
     * Draw face outline
     */
    //% weight=90
    //% block="draw face outline" blockId="face_outline"
    export function drawFaceOutlineAsync() {
        return runtimeStateFactory().drawFaceOutlineAsync();
    }

    /**
     * Draw deformation
     */
    //% block="deform face %deform" blockId="face_deform"
    //% weight=50
    export function drawFaceDeformationAsync(deform: faceDeform) {
        switch (deform) {
            case faceDeform.unwell:
                return runtimeStateFactory().drawFaceDeformAsync([0, 0, 0, 0, 0, 0, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

            case faceDeform.inca:
                return runtimeStateFactory().drawFaceDeformAsync([0, 0, -9, 0, -11, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0]);

            case faceDeform.cheery:
                return runtimeStateFactory().drawFaceDeformAsync([0, 0, -9, 9, -11, 0, 0, 0, 0, 0, 0, 0, -9, 0, 0, 0, 0, 0]);

            case faceDeform.dopey:
                return runtimeStateFactory().drawFaceDeformAsync([0, 0, 0, 0, 0, 0, 0, -11, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0]);

            case faceDeform.longface:
                return runtimeStateFactory().drawFaceDeformAsync( [0, 0, 0, 0, -15, 0, 0, -12, 0, 0, 0, 0, 0, 0, -7, 0, 0, 5]);

            case faceDeform.lucky:
                return runtimeStateFactory().drawFaceDeformAsync([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -4, 0, -6, 12, 0, 0]);

            case faceDeform.overcute:
                return runtimeStateFactory().drawFaceDeformAsync([0, 0, 0, 0, 16, 0, -14, 0, 0, 0, 0, 0, -7, 0, 0, 0, 0, 0]);

            case faceDeform.aloof:
                return runtimeStateFactory().drawFaceDeformAsync([0, 0, 0, 0, 0, 0, 0, -8, 0, 0, 0, 0, 0, 0, -2, 0, 0, 10]);

            default:
                return Promise.delay(100);
        }
    }

    /**
     * Add MASKS to faces
     */
    //% weight=90
    //% block="draw mask %mask" blockId="face_mask"
    export function drawMasksAsync(mask: maskType) {
        switch (mask) {
            case maskType.ironman:
                return runtimeStateFactory().drawFaceMasksAsync('ironman');

            case maskType.audrey:
                return runtimeStateFactory().drawFaceMasksAsync('audrey');

            case maskType.average:
                return runtimeStateFactory().drawFaceMasksAsync('average');

            case maskType.nicolas_cage:
                return runtimeStateFactory().drawFaceMasksAsync('cage2');

            case maskType.monalisa:
                return runtimeStateFactory().drawFaceMasksAsync('joconde');

            case maskType.sean_connery:
                return runtimeStateFactory().drawFaceMasksAsync('SeanConnery');

            case maskType.skull:
                return runtimeStateFactory().drawFaceMasksAsync('skull');

            default:
                return Promise.delay(100);
        }
    }

    /**
     * Face substitution
     */
    //% weight=90
    //% block="face substitution %face" blockId="face_sub"
    export function faceSubstitutionLoopAsync(face: faceSubType) {
        switch (face) {
            case faceSubType.average:
                return runtimeStateFactory().drawFaceSubstitutionAsync("sub-average");
            case faceSubType.terminator:
                return runtimeStateFactory().drawFaceSubstitutionAsync("sub-terminator");
            case faceSubType.walter:
                return runtimeStateFactory().drawFaceSubstitutionAsync("sub-walter");
            case faceSubType.clooney:
                return runtimeStateFactory().drawFaceSubstitutionAsync("sub-clooney");
            case faceSubType.bieber:
                return runtimeStateFactory().drawFaceSubstitutionAsync("sub-bieber");
            case faceSubType.kim:
                return runtimeStateFactory().drawFaceSubstitutionAsync("sub-kim");
            case faceSubType.rihanna:
                return runtimeStateFactory().drawFaceSubstitutionAsync("sub-rihanna");
            case faceSubType.audrey:
                return runtimeStateFactory().drawFaceSubstitutionAsync("sub-audrey");
            case faceSubType.bill:
                return runtimeStateFactory().drawFaceSubstitutionAsync("sub-bill");
            case faceSubType.connery:
                return runtimeStateFactory().drawFaceSubstitutionAsync("sub-connery");
            case faceSubType.cage:
                return runtimeStateFactory().drawFaceSubstitutionAsync("sub-cage");
            case faceSubType.queen:
                return runtimeStateFactory().drawFaceSubstitutionAsync("sub-queen");
            case faceSubType.obama:
                return runtimeStateFactory().drawFaceSubstitutionAsync("sub-obama");
            case faceSubType.chuck:
                return runtimeStateFactory().drawFaceSubstitutionAsync("sub-chuck");
            case faceSubType.monalisa:
                return runtimeStateFactory().drawFaceSubstitutionAsync("sub-monalisa");
            case faceSubType.scream:
                return runtimeStateFactory().drawFaceSubstitutionAsync("sub-scream");

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
        runtimeStateFactory().isOnDetecting = false;
        thread.forever(body);
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
        runtimeStateFactory().writeSerial(msg + "\n");
    }
}

namespace pxsim {

    export class Sprite {
        /**
         * The X-coordiante
         */
        //%
        public x = 100;
        /**
         * The Y-coordiante
         */
        //%
        public y = 100;
        public angle = 90;

        constructor() {}
    }
}