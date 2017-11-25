/**
 * The detector apis
 */
//% weight=100
//% block="Face Detector"
//% color=#5B0621 icon="\uf29a"
namespace detector {

}

/**
 * The special effect apis
 */
//% weight=100
//% block="Augmented Reality"
//% color=#3891a6 icon="\uf118"
namespace augmentedReality {

}

/**
 * The gamming effect apis
 */
//% weight=100
//% block="Gaming"
//% color=#E87B21 icon="\uf11b"
namespace gaming {

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
