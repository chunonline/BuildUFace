Wrapup.md
# Microsoft_MakeCode_Wrapup
This is the repo to host wrap up our project.

## Project Process

We started with research about existing APIs that can do face live tracking, and was very fortunate to find [**clmtracker**](https://github.com/auduno/clmtrackr) --- a Javascript library for precise tracking of facial features via Constrained Local Models. The library provides basic functions such as tracking face in video, face substitution, face masking, real-time face deformation, emotion/gender detection and so on. These together offer a good starting point of our project. After we’ve had a general idea of what we would like to achieve, we went on with design explorations about how the interface(simulator) would look like (Figure 1). Then came the feature development phase and finally the user interview.

## What we have achieved

### Features
We implemented two categories of features into our app (Figure 1). First is Augmented Reality. AR is all about decorating the reality, so we have three special effect features: draw masks, face substitution and face deformation. The first effect directly put a mask of, for example, ironman, monalisa and skulls onto user’s face without modifying the skin color; face substitution, however, mainly focus on putting on other people’s face and can better combine the characteristics of users’ own face with that person’s face. Face deformation, however, transforms users’ face like stretching their faces. These effects form the fundamental features of our app in that users can modify their faces through these elements. 

Nonetheless, these are just decorations and are only part of the program that users can build. In order to enable users to add more logics into the program, we implemented a set of facial feature detections. One of them is to get the face status of users (i.e., analyse sentiment, gender and if their mouths are open/closed). The other one is a more advanced feature---get the spacial position of their faces relative to the screen coordinate space. We separate these two features and put them into different sub-blocks. For users who do not have that much knowledge in programming, they can just use the basic face status detection feature. Now with feature detection, the platform is more programmable.
Last, we introduced a gaming function onto the web app, which is implemented with the SVG canvas on the video. In the game, a ball is dropping from the top of the simulator at random horizontal position, and users can check if the ball hit their noses or mouths. We hope this ball dropping game can add more interaction between users and the simulator, because users can not only add some effect to their faces, but also they can interact with their face using the webcam (e.g., chasing the ball using their noses or mouths). 

![alt text](BuildUFace/features.jpg "Feature Demonstration")
Figure 1 Two categories of features: Augmented Reality and Gaming.

## Challenges and Lessons Learned 

## Notes for further development

After you're done, simple run this command to publish the website:
```
balabala
```

If you can't see the change after deploying, try to clean the pxt first and rebuild:

```
pxt clean
```


