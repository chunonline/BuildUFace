// Auto-generated from simulator. Do not edit.
declare namespace faceAR {
    /**
     * Draw face outline
     */
    //% weight=90
    //% block
    //% shim=faceAR::drawFaceOutlineOnceAsync promise
    function drawFaceOutlineOnce(): void;

    /**
     * Test on
     */
    //% block="meow test %param" blockId=meow_test
    //% blockGap=8 weight=54
    //% shim=faceAR::meowTest
    function meowTest(input: number, meow?: () => void, meow2?: () => void): void;

    /**
     * Test In
     */
    //% block="inner" blockId=inner
    //% weight=90
    //% shim=faceAR::innerTest
    function innerTest(): void;

    /**
     * Add MASKS to faces
     */
    //% weight=90
    //% block
    //% shim=faceAR::drawMasksLoopAsync promise
    function drawMasksLoop(mask: maskType): void;

    /**
     * Face substitution
     */
    //% weight=90
    //% block
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
