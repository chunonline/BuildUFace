/// <reference path="../libs/core/enums.d.ts"/>

namespace pxsim.faceAR {

    /**
     * Act on sentiment
     *
     * @param sentiment
     * @param handler 
     */
    //% weight=100
    //% blockId=onsentiment block="on sentiment %sentiment"
    export function onSentiment(sentiment: Sentiment, handler: RefAction) {
        faceDetector().isOnDetecting = true;
        faceDetector().bus.listen("sentiment", sentiment, handler);
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
        faceDetector().isOnDetecting = true;
        faceDetector().bus.listen("gender", gender, handler);
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
        faceDetector().isOnDetecting = true;
        faceDetector().bus.listen("mouthStatus", mouthStatus, handler);
    }

    /**
     * Detect sentiment
     */
    //%
    export function detectSentiment() {
        let sentimentList = faceDetector().getFaceEmotionList();

        if (sentimentList && sentimentList.length != 0) {
            let currentSentiment:SentimentPair = faceDetector().getTopEmotion(sentimentList);

            if (currentSentiment.value > faceDetector().faceEmotionThreshold) {
                faceDetector().bus.queue("sentiment", currentSentiment.sentiment);
            }
        }
    }

    /**
     * Detect MouthStatus
     */
    //%
    export function detectMouthStatus() {
        if (faceDetector().isMouthOpen()) {
            faceDetector().bus.queue("mouthStatus", MouthStatus.Open);
        } else {
            faceDetector().bus.queue("mouthStatus", MouthStatus.Close);
        }
    }

    /**
     * Detect Gender
     */
    //%
    export function detectGender() {
        let genderList = faceDetector().getGenderPredictionList();
        if (genderList && genderList.length != 0) {
            let topGender = faceDetector().getTopGender(genderList);

            faceDetector().bus.queue("gender", topGender);
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
            return faceDetector().isFaceLeanLeft();
        } else {
            return faceDetector().isFaceLeanRight();
        }

    }

    /**
     * get face center X position
     *
     */
    //% weight=100
    //% blockId=getFaceHorizontalPosition block="get face horizontal position"
    export function getFaceXPosition():number {
        return faceDetector().getFaceCenterXPosition();
    }

    /**
     * get face center Y position
     *
     */
    //% weight=100
    //% blockId=getFaceVerticalPosition block="get face vertical position"
    export function getFaceYPosition():number {
        return faceDetector().getFaceCenterYPosition();
    }

    /**
     * Draw face outline
     */
    //% weight=90
    //% block="draw face outline" blockId="face_outline"
    export function drawFaceOutlineAsync() {
        return faceDetector().drawFaceOutlineAsync();
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
        return faceDetector().getMaskConvergence();
    }


    /**
     * Draw deformation
     */
    //% block="deform face %deform" blockId="face_deform"
    //% weight=50
    export function drawFaceDeformationAsync(deform: faceDeform) {
        switch (deform) {
            case faceDeform.unwell:
                return faceDetector().drawFaceDeformAsync([0, 0, 0, 0, 0, 0, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

            case faceDeform.inca:
                return faceDetector().drawFaceDeformAsync([0, 0, -9, 0, -11, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0]);

            case faceDeform.cheery:
                return faceDetector().drawFaceDeformAsync([0, 0, -9, 9, -11, 0, 0, 0, 0, 0, 0, 0, -9, 0, 0, 0, 0, 0]);

            case faceDeform.dopey:
                return faceDetector().drawFaceDeformAsync([0, 0, 0, 0, 0, 0, 0, -11, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0]);

            case faceDeform.longface:
                return faceDetector().drawFaceDeformAsync( [0, 0, 0, 0, -15, 0, 0, -12, 0, 0, 0, 0, 0, 0, -7, 0, 0, 5]);

            case faceDeform.lucky:
                return faceDetector().drawFaceDeformAsync([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -4, 0, -6, 12, 0, 0]);

            case faceDeform.overcute:
                return faceDetector().drawFaceDeformAsync([0, 0, 0, 0, 16, 0, -14, 0, 0, 0, 0, 0, -7, 0, 0, 0, 0, 0]);

            case faceDeform.aloof:
                return faceDetector().drawFaceDeformAsync([0, 0, 0, 0, 0, 0, 0, -8, 0, 0, 0, 0, 0, 0, -2, 0, 0, 10]);

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
    //% block="face substitution %face" blockId="face_sub"
    export function faceSubstitutionLoopAsync(face: faceSubType) {
        switch (face) {
            case faceSubType.average:
                return faceDetector().drawFaceSubstitutionAsync("sub-average");
            case faceSubType.terminator:
                return faceDetector().drawFaceSubstitutionAsync("sub-terminator");
            case faceSubType.walter:
                return faceDetector().drawFaceSubstitutionAsync("sub-walter");
            case faceSubType.clooney:
                return faceDetector().drawFaceSubstitutionAsync("sub-clooney");
            case faceSubType.bieber:
                return faceDetector().drawFaceSubstitutionAsync("sub-bieber");
            case faceSubType.kim:
                return faceDetector().drawFaceSubstitutionAsync("sub-kim");
            case faceSubType.rihanna:
                return faceDetector().drawFaceSubstitutionAsync("sub-rihanna");
            case faceSubType.audrey:
                return faceDetector().drawFaceSubstitutionAsync("sub-audrey");
            case faceSubType.bill:
                return faceDetector().drawFaceSubstitutionAsync("sub-bill");
            case faceSubType.connery:
                return faceDetector().drawFaceSubstitutionAsync("sub-connery");
            case faceSubType.cage:
                return faceDetector().drawFaceSubstitutionAsync("sub-cage");
            case faceSubType.queen:
                return faceDetector().drawFaceSubstitutionAsync("sub-queen");
            case faceSubType.obama:
                return faceDetector().drawFaceSubstitutionAsync("sub-obama");
            case faceSubType.chuck:
                return faceDetector().drawFaceSubstitutionAsync("sub-chuck");
            case faceSubType.monalisa:
                return faceDetector().drawFaceSubstitutionAsync("sub-monalisa");
            case faceSubType.scream:
                return faceDetector().drawFaceSubstitutionAsync("sub-scream");

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
        faceDetector().isOnDetecting = false;
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
        faceDetector().writeSerial(msg + "\n");
    }
}

namespace pxsim {
    /**
     * A ghost on the screen.
     */
}