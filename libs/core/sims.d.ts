// Auto-generated from simulator. Do not edit.
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
declare namespace augmentedReality {
    /**
     * Draw face outline
     */
    //% weight=90
    //% block="draw face outline" blockId="face_outline"
    //% shim=augmentedReality::drawFaceOutlineAsync promise
    function drawFaceOutline(): void;

    /**
     * Draw deformation
     */
    //% block="deform face %deform" blockId="face_deform"
    //% weight=50
    //% shim=augmentedReality::drawFaceDeformationAsync promise
    function drawFaceDeformation(deform: faceDeform): void;

    /**
     * Add MASKS to faces
     */
    //% weight=90
    //% block="draw mask %mask" blockId="face_mask"
    //% shim=augmentedReality::drawMasksAsync promise
    function drawMasks(mask: maskType): void;

    /**
     * Face substitution
     */
    //% weight=90
    //% block="face substitution %face" blockId="face_sub"
    //% shim=augmentedReality::faceSubstitutionLoopAsync promise
    function faceSubstitutionLoop(face: faceSubType): void;

}
declare namespace detector {
    /**
     * Act on sentiment
     *
     * @param sentiment
     * @param handler
     */
    //% weight=100
    //% blockId=onsentiment block="on sentiment %sentiment"
    //% shim=detector::onSentiment
    function onSentiment(sentiment: Sentiment, handler: () => void): void;

    /**
     * Act on sentiment
     *
     * @param gender
     * @param handler
     */
    //% weight=100
    //% blockId=ongender block="on gender %gender"
    //% shim=detector::onGender
    function onGender(gender: Gender, handler: () => void): void;

    /**
     * Act on mouth open or close
     *
     * @param mouthStatus
     * @param hander
     */
    //% weight=100
    //% blockId=onmouthstatus block="on mouth %mouthStatus"
    //% shim=detector::onMouthStatus
    function onMouthStatus(mouthStatus: MouthStatus, handler: () => void): void;

    /**
     * Detect sentiment
     */
    //%
    //% shim=detector::detectSentiment
    function detectSentiment(): void;

    /**
     * Detect MouthStatus
     */
    //%
    //% shim=detector::detectMouthStatus
    function detectMouthStatus(): void;

    /**
     * Detect Gender
     */
    //%
    //% shim=detector::detectGender
    function detectGender(): void;

    /**
     * isFaceLeanLeft
     *
     * @param leftRight
     */
    //% weight=100
    //% blockId=isFaceLeanLeft block="is face lean %leftRight"
    //% shim=detector::faceLean
    function faceLean(leftRight: LeftRight): boolean;

    /**
     * get face center X position
     *
     */
    //% weight=100
    //% blockId=getFaceHorizontalPosition block="get face horizontal position"
    //% advanced=true
    //% shim=detector::getFaceXPosition
    function getFaceXPosition(): number;

    /**
     * get face center Y position
     *
     */
    //% weight=100
    //% blockId=getFaceVerticalPosition block="get face vertical position"
    //% advanced=true
    //% shim=detector::getFaceYPosition
    function getFaceYPosition(): number;

    /*
     * Tracking convergence
     *
     * This function indicates how well the face is being tracked.
     * The smaller the number, the better the tracking results.
     * */
    //% block="get tracking convergence" blockId="get_track_conv"
    //% weight=90
    //% advanced=true
    //% shim=detector::getTrackingConvergence
    function getTrackingConvergence(): number;

}
declare namespace gaming {
    /**
     * Drop ball catcher
     *
     * @param speed
     */
    //% weight=100
    //% blockId=onballdrop block="on ball drop speed %speed"
    //% shim=gaming::onBallDrop
    function onBallDrop(speed: Speed, handler: () => void): void;

    /**
     * get ball x position
     */
    //% weight=100
    //% blockId=getBallXPos block="get ball horizontal position"
    //% advanced=true
    //% shim=gaming::getBallXPos
    function getBallXPos(): number;

    /**
     * get ball y position
     */
    //% weight=100
    //% blockId=getBallYPos block="get ball vertical position"
    //% advanced=true
    //% shim=gaming::getBallYPos
    function getBallYPos(): number;

    /**
     * check if ball hit mouth
     */
    //% weight=100
    //% blockId=ifBallHitMouth block="is ball hitting mouth"
    //% shim=gaming::ifBallHitMouth
    function ifBallHitMouth(): boolean;

    /**
     * check if ball hit nose
     */
    //% weight=100
    //% blockId=ifBallHitNose block="is ball hitting nose"
    //% shim=gaming::ifBallHitNose
    function ifBallHitNose(): boolean;

    /**
     * Drop ball
     */
    //%
    //% shim=gaming::dropBall
    function dropBall(): void;

}

// Auto-generated. Do not edit. Really.
