/**
 * Created by chendi on 2/12/17.
 */
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
