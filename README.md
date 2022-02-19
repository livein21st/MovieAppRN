<p align="center">
  <h3 align="center">MovieApp RN: The Upcoming Movie Guide</h3>
</p>

---

[![supports iOS](https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff)](https://expo.io/@murillo94/cine-the-movie-guide)
[![supports Android](https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff)](https://expo.io/@murillo94/cine-the-movie-guide)

The MovieApp is your upcoming movie guide. The fastest and easiest way to look for upcoming Movieson your device.

<!-- ![Cine: The Movie Guide](./resources/demo.png) -->

## Architecture

The app was built to run on iOS, Android. It uses [React Native CLI](https://reactnative.dev/docs/environment-setup) as a core lib to build and distribute to all the platforms.

### Libs

- [react-navigation](https://github.com/react-navigation/react-navigation)
  - [react-navigation/bottom-tabs](https://reactnavigation.org/docs/tab-based-navigation)
  - [react-navigation/native-stack](https://reactnavigation.org/docs/hello-react-navigation)
- [react-native-paper](https://callstack.github.io/react-native-paper/index.html)
- [react-native-vector-icons](https://oblador.github.io/react-native-vector-icons/)

### APIs

- [TMDb](https://developers.themoviedb.org/3/movies/get-upcoming)

## Running locally

As others projects, you will need some requirements to run:

#### Requirements

- [Node.js](https://nodejs.org/) (latest)
- [ReactNativeExpo](https://reactnative.dev/docs/environment-setup) -`npm install --global expo-cli`
- [Xcode For running on Simulator]

#### How to run

- `git clone https://github.com/livein21st/MovieAppRN.git`
- `npm install`
- `expo start`

#### Easy explore the app on Expo Go app on mobile

- [DownloadExpoGoAppMobile](https://expo.dev/client)
- ![Scan QR-CODE](./assets/appQR.png)

## TBD

- Further implementation of api.js for fetching more than one page of upcoing movie list
- Search qeury request in the api
