<p align="center">
  <h3 align="center">MovieApp RN: The Upcoming Movie Guide</h3>
</p>

---

[![supports iOS](https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff)](https://expo.io/@murillo94/cine-the-movie-guide)
[![supports Android](https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff)](https://expo.io/@murillo94/cine-the-movie-guide)

Cine is your movie guide. The fastest and easiest way to look for upcoming Movieson your device.

<!-- ![Cine: The Movie Guide](./resources/demo.png) -->

## Architecture

Cine was built to run on iOS, Android. It uses [React Native CLI](https://reactnative.dev/docs/environment-setup) as a core lib to build and distribute to all the platforms.

### Libs

- [react-navigation](https://github.com/react-navigation/react-navigation)
- [react-native-paper](https://callstack.github.io/react-native-paper/index.html)

### APIs

- [TMDb](https://developers.themoviedb.org/3/movies/get-upcoming)

## Running locally

As others projects, you will need some requirements to run:

#### Requirements

- [Node.js](https://nodejs.org/) (latest)
- [ReactNative](https://reactnative.dev/docs/environment-setup)

#### How to run

- `git clone https://github.com/livein21st/MovieAppRN.git`
- `npm install`
- `npx react-native start`

Now, you can choose a command to run the project:

- `npx react-native run-ios` to run on iOS simulator
- `npx react-native run-android` to run on Android simulator
