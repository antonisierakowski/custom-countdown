# Custom Countdown

## Introduction

This app is a single-page custom countdown generator. It lets you specify the date and time of the event to count down to, customise the created page, and then it stores the data on the firebase server, so you can share your countdown's URL with anybody.<br />
You can run it at https://custom-countdown-a5f02.firebaseapp.com/

## Tools used
To build this app, I've used the following tools:
* React.js with its new Hooks API
* React-router
* Firebase to store data about created countdown pages and for hosting
* Material UI
* styled-components
* moment.js
* shortid package

## How to Use

### Main page
The landing page lets you specify your event's title (so it later reads "X starts in..." where X is your title), and then event's date and time with date-pickers. On the right there are two panels. The upper one selects which of the preselected images will be rendered as background image for your countdown. The lower one selects a pair of graphic assets for your page: the animation displayed when your countdown is active, and animation for when the specified time has already come. After you're happy with your settings, clicking the "create countdown" button will do so and redirect it to your new page.

### Countdown
Each countdown page has a unique URL and is persistent, so once it's created, it will stay under that URL. It consists of an actual countdown to the specified event, a decorational animation or graphic, and a field displaying current URL with a convenient button to immediately copy it to your clipboard.
