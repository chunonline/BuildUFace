# Microsoft_MakeCode
This is the repo to host our project on MakeCode for Microsoft Research.

## Running locally

These instructions allow to run locally to modify the sample.

### Setup

The following commands are a 1-time setup after synching the repo on your machine.

* install [node.js](https://nodejs.org/en/)

* install the PXT command line
```
npm install -g pxt
```
* install the dependencies
```
npm install
```

### Running the local server

After you're done, simple run this command to open a local web server:
```
pxt serve
```

After making a change in the source, refresh the page in the browser.

## Updating the tools

If you would like to pick up the latest PXT build, simply run
```
pxt update
```

More instructions at https://github.com/Microsoft/pxt#running-a-target-from-localhost 

### 1011 API Layout

* 	Precise Tracking of Facial Features via Constrained Local Models
	https://github.com/auduno/clmtrackr
		
		Tracking in image (default): will automatically trigger when the user opens the app
		Tracking in video (will implement after we finished the static)
		Face substitution
		Face masking
		Realtime face deformation
		Emotion detection
		Caricature


*	Microsoft Cognitive and AI
	https://docs.microsoft.com/en-us/azure/#pivot=products&panel=cognitive

		Face verification / Face identification
		Face detection (multiple detections in one image)
		Face grouping (Organize many unidentified faces together into groups, based on their visual similarity)
		Similar Face Search

*	Microsoft AR
	https://github.com/Microsoft/pxt-ar


*	FaceRecognition in ARKit
	https://github.com/NovaTecConsulting/FaceRecognition-in-ARKit

		Vision-API and runs the extracted face through a CoreML-model to identiy the specific persons.

* 	Possible: Speech API
	https://azure.microsoft.com/en-us/services/cognitive-services/directory/speech/