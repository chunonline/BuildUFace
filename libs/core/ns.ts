/**
 * The Face apis
 */
//% weight=100
//% color=#3891a6 icon="\uf2bd"
namespace faceAR {

}

/*
 * Main Rendering Engine
 * */
loops.forever(() => {
    if (true) {
        faceAR.detectSentiment();
        faceAR.detectMouthStatus();
        faceAR.detectGender();
    }
});
