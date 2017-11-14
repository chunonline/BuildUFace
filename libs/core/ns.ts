/**
 * The Face apis
 */
//% weight=100
//% color=#636363 icon="\uf2bd"
namespace faceAR {

}

/**
 * Control flow
 */
//% color=#FF5722 weight=90
namespace control {

}

/*
 * Main Rendering Engine
 * */
loops.forever(() => {
    if (true) {
        //faceAR.clearCanvas();
        faceAR.detectSentiment();
        faceAR.detectMouthStatus();
    }
});
