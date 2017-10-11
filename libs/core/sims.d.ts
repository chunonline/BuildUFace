// Auto-generated from simulator. Do not edit.
declare namespace faceAR {
    /**
     * Draw face outline
     */
    //% weight=90
    //% block
    //% shim=faceAR::drawFaceOutlineAsync promise
    function drawFaceOutline(): void;

    /**
     * Add masks to faces
     */
    //% weight=90
    //% block
    //% shim=faceAR::drawIronmanMasksAsync promise
    function drawIronmanMasks(): void;

    /**
     * Add masks to faces
     */
    //% weight=90
    //% block
    //% shim=faceAR::drawAudreyMasksAsync promise
    function drawAudreyMasks(): void;

    /**
     * Add masks to faces
     */
    //% weight=90
    //% block
    //% shim=faceAR::drawAverageMasksAsync promise
    function drawAverageMasks(): void;

    /**
     * Add masks to faces
     */
    //% weight=90
    //% block
    //% shim=faceAR::drawNicolasCageMasksAsync promise
    function drawNicolasCageMasks(): void;

    /**
     * Add masks to faces
     */
    //% weight=90
    //% block
    //% shim=faceAR::drawMonaLisaMasksAsync promise
    function drawMonaLisaMasks(): void;

    /**
     * Add masks to faces
     */
    //% weight=90
    //% block
    //% shim=faceAR::drawSeanConneryMasksAsync promise
    function drawSeanConneryMasks(): void;

    /**
     * Add masks to faces
     */
    //% weight=90
    //% block
    //% shim=faceAR::drawSkullMasksAsync promise
    function drawSkullMasks(): void;

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
