# Memory

Heroku Deployment: https://memory-guess.herokuapp.com/

## Problem Summary 
- As someone who enjoys puzzles, I'd like to play a game that tests my memory.

## Overview
- This is a React application based upon the board game "Memory". Users must select from a grid of images. The user may click on a single image one time only. Each time they click, the images are shuffled and they must pick another image that they have not yet selected. The user wins when they've selected each image on the grid one time.

## Installation & Prerequisites

![Dependent Packages](https://github.com/nick-ramsay/readme-images/blob/master/memory/dependent-packages.jpg?raw=true)

- The Memory application is dependent upon one JavaScript library...
 
 1. React.js
 
- If you have cloned the repository with the ```package.json``` file, the packages required for React.js can be installed using the npm-install command.

## Instructions

To start the Memory application, run the following command: ```npm start```

Memory is deployed on Heroku for usage [here](https://memory-guess.herokuapp.com/).

To play the game, simply click on an image. Remember which image you clicked because after clicking, the images will shuffle. Your goal is to select each image only one time. You should now select a second image that is not the previously selected image. Each time you click an image which was not previously selected, your score will go up by one. If you select an image more than once, your score will be reset to zero. If you make it through the game selecting each image only one time, you will win and the "Score" and "High Score" will be reset to zero so you can start again.

![Memory Demo](https://github.com/nick-ramsay/readme-images/blob/master/memory/memory-99-demo.gif?raw=true)

## Built With
- The Memory application was built using Bootstrap and React.js

## Authors 
- Developer: Nick Ramsay (@nick-ramsay)
