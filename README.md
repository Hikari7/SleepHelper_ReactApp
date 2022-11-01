# Sleep tight

A web application helps users to sleep better

## Demo Link

- [Sleep tight](https://sleeptight.vercel.app/)

![The home image](./src/ReadMe/Screen%20Shot%202022-10-30%20at%209.25.23%20AM.png)
![The top image](./src/ReadMe/Screen%20Shot%202022-10-30%20at%209.26.07%20AM.png)
![The categories image](./src/ReadMe/Screen%20Shot%202022-10-31%20at%205.45.09%20PM.png)

## Built With

- `React` : version 18.2.0
- `GSAP` : version 3.11.3
- `tailwindcss` : version 3.0.2

- YouTube Data API v3


## Features

- The web app only plays BGM-related relaxing sounds fetched by Youtube Data API. I've already incorporated the query keyword "sleep" in the the parameters as the default, so that's why only the relaxing video (sound) will be played. And also users can choose various relaxing sound categories and search what categories the app has as well.

- Designed the minimized styling to help the user to focus on sleeping well. So I used `ReactPlayer v2.0` for customizing sound player settings and made videos invisible to avoid destructing sleeping.


## Challenging Part

- Implementing the search section was challenging for me. Because it was necessary to consider the component structures properly and efficiently.  So I made the `search.js` for getting the values the user typed as a child component of `Categoies.js `. And then I used them as props to filter depending on the category's name.
I was able to learn how to manage props through this.


## Setup

- Download or clone the repository
- Run npm install
- Run npm start to start running the app

## Status

This app is still in progress to be updated!

