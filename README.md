# Testing Spotify API

![Interface Screenshot](public/screenshot.png)

## This is a study using the Spotify lib

This project was developed during the [JS COM TDD NA PRÁTICA](https://www.udemy.com/course/js-com-tdd-na-pratica) course.
You can search by artists or albums and even listen to a preview of the songs.
I made some changes to the original content. I preferred to use `yarn` instead of `npm` and updated webpack and customized eslint.


## How to run?

First you need to go to [Spotify Developers API](https://developer.spotify.com/console/get-search-item/) and create your Token. Then add your token on src/spotify.js.
PS: Remember that the token will expire in 60min and each song will play for only 30 seconds.

Install the dependecies and run the application with `yarn && yarn start`

## Plans for the future

- [ ] Show 30 seconds countdown
- [ ] Show progress bar
- [ ] Show modal when an error occurs
- [ ] Search for playlists and podcasts
- [ ] Responsive layout
- [ ] More tests

