/**
 * The special effect apis
 */
//% weight=100
//% block="Augmented Reality"
//% color=#3891a6 icon="\uf118"
namespace AugmentedReality {

}

/**
 * The detector apis
 */
//% weight=100
//% block="Face Detector"
//% color=#5B0621 icon="\uf29a"
namespace detector {

}

/*
 * Main Rendering Engine
 * */
loops.forever(() => {
    if (true) {
        detector.detectSentiment();
        detector.detectMouthStatus();
        detector.detectGender();
    }
});
