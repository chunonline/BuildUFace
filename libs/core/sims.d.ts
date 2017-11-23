// Auto-generated from simulator. Do not edit.
declare namespace faceAR {
    /**
     * Act on sentiment
     *
     * @param sentiment
     * @param handler 
     */
    //% weight=100
    //% blockId=onsentiment block="on sentiment %sentiment"
    //% shim=faceAR::onSentiment
    function onSentiment(sentiment: Sentiment, handler: () => void): void;

    /**
     * Act on sentiment
     *
     * @param gender
     * @param handler
     */
    //% weight=100
    //% blockId=ongender block="on gender %gender"
    //% shim=faceAR::onGender
    function onGender(gender: Gender, handler: () => void): void;

    /**
     * Act on mouth open or close
     *
     * @param mouthStatus
     * @param hander
     */
    //% weight=100
    //% blockId=onmouthstatus block="on mouth %mouthStatus"
    //% shim=faceAR::onMouthStatus
    function onMouthStatus(mouthStatus: MouthStatus, handler: () => void): void;

    /**
     * Detect sentiment
     */
    //%
    //% shim=faceAR::detectSentiment
    function detectSentiment(): void;

    /**
     * Detect MouthStatus
     */
    //%
    //% shim=faceAR::detectMouthStatus
    function detectMouthStatus(): void;

    /**
     * Detect Gender
     */
    //%
    //% shim=faceAR::detectGender
    function detectGender(): void;

    /**
     * Draw face outline
     */
    //% weight=90
    //% block="draw face outline" blockId="face_outline"
    //% shim=faceAR::drawFaceOutlineAsync promise
    function drawFaceOutline(): void;

    /*
     * Tracking convergence
     *
     * This function indicates how well the face is being tracked.
     * The smaller the number, the better the tracking results.
     * */
    //% block="Get Tracking Convergence" blockId="get_track_conv"
    //% weight=90
    //% shim=faceAR::getTrackingConvergence
    function getTrackingConvergence(): number;

    /**
     * Draw deformation
     */
    //% block="deform face %deform" blockId="face_deform"
    //% weight=50
    //% shim=faceAR::drawFaceDeformationAsync promise
    function drawFaceDeformation(deform: faceDeform): void;

    /**
     * Add MASKS to faces
     */
    //% weight=90
    //% block="draw mask %mask" blockId="face_mask"
    //% shim=faceAR::drawMasksAsync promise
    function drawMasks(mask: maskType): void;

    /**
     * Face substitution
     */
    //% weight=90
    //% block="face substitution %face" blockId="face_sub"
    //% shim=faceAR::faceSubstitutionLoopAsync promise
    function faceSubstitutionLoop(face: faceSubType): void;

}
declare namespace loops {
    /**
     * Repeats the code forever in the background. On each iteration, allows other code to run.
     * @param body the code to repeat
     */
    //% help=functions/forever weight=55 blockGap=8
    //% blockId=device_forever block="forever"
    //% shim=loops::forever
    function forever(body: () => void): void;

    /**
     * Pause for the specified time in milliseconds
     * @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000
     */
    //% help=functions/pause weight=54
    //% block="pause (ms) %pause" blockId=device_pause
    //% shim=loops::pauseAsync promise
    function pause(ms: number): void;

}
declare namespace console {
    /**
     * Print out message
     */
    //%
    //% shim=console::log
    function log(msg: string): void;

}

// Auto-generated. Do not edit. Really.
