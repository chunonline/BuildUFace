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

![alt text](https://github.com/JCSPEC/BuildUFace/blob/master/features.jpg "Feature Demonstration" )
			Figure 1 Two categories of features: Augmented Reality and Gaming.

### User Interview
After we’ve had our all the features, we conduct 5 user testing and interview. The procedure is shown on the user journey map below(Figure 2). We first briefly introduced all the functional parts of the platform, and gave them 3 minutes to explore it. Then they are asked to go through 6 tasks(Action 1 to 3), starting from the relatively simple ones to the more complicated ones---first trigger a face detection event and do something with their face, after which they needed to add if blocks, conditions, to play games and make use of functions.

Generally speaking, the participants enjoyed playing with their faces on the platform, and expressed willingness to switch to Javascript view to see the code unwrapped from the visual blocks. This shows that the platform trigger users interest in exploring more about the javascript, which is our original purpose. On the other hand, they’ve also had some problems. First, we found that generally they stuck on the first two tasks for a long time, especially when they need to add the condition statement in “if block”, because they were not aware that the diamond-shaped element can fit in the condition blank. We realized it might help to give some examples and inform the users that blocks of the same shape serve similar purposes and that they can substitute each other. Moreover, they also had problem finding the right elements, especially when trying to use some getter method like get the position of face. This could be the result of the layout of our original platform, where event trigger block and getter method were put together under the same block like the “face detection”. Thanks for our client’s advice, we added a *…More* sub_blocks for advanced feature, which we believe will greatly ease the navigation process for users.

![alt text](https://github.com/JCSPEC/BuildUFace/blob/master/User_Journey_Map.png "User_Journey_Map" )
Figure 3    User Journey Map. From action 1 to 3, users start from triggering a face detection event and simple modification of their face, to adding if blocks, conditions, and making use of functions.

## Challenges and Lessons Learned 
When we first got the project and self-explored MakeCode, we were greatly inspired by the idea of programming in such an interactive way. However, it took us some time to fully understand the goal of the project. Initially we implemented a few augmented reality blocks, and when users dragged the blocks into the playground, everything worked fine except that the platform was not playable. Then we gradually figured out that the point of the platform is to let the users learn coding while they have to build up the “API” by themselves, as opposed to we providing them completed API. Part of this process involves learning about MakeCode. As a result, we broke the original blocks into a more playable, manipulatable smaller blocks so the users can combine different parts of the API by themselves. 

Another lesson we learned is how to use the loop function(event handlers). Originally the platform has a “On start” and a “Forever” loop, which controls the whole app. After looking into some of the existing samples of MakeCode (e.g. Microbit), we realized that a call on forever loop is not necessary. As we started to gain a better insight into MakeCode, event trigger blocks like face status detection blocks were created. The loops are running backhand so the users do not need to explicitly call the loop while still being able to trigger face tracking and feature detection.

Last but not least, we were struggling to make the project more playable all the time. MakeCode is such a fun platform, so we expect that users can have actual interaction with the screen, instead of just adding effect to their faces. Thanks to our clients’ advice, we finally had the idea of adding a ball dropping game, and from the poster showcase we found the users indeed enjoyed this game very much!

## Notes for further development


After you're done, simple run this command to publish the website:
```
balabala
```

If you can't see the change after deploying, try to clean the pxt first and rebuild:

```
pxt clean
```


