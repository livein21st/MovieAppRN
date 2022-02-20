<p align="center">
  <h3 align="center">MovieApp RN: The Upcoming Movie Guide</h3>
</p>

---

[![supports iOS](https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff)](https://expo.io/@murillo94/cine-the-movie-guide)
[![supports Android](https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff)](https://expo.io/@murillo94/cine-the-movie-guide)

The MovieApp is your upcoming movie guide. The fastest and easiest way to look for upcoming Movieson your device.

![The MovieApp](./assets/demo1.png | width="400" height="900" ) ![The MovieApp](./assets/demo2.png | width="400" height="900")

## Architecture

This App utilizes Expo for development. To get started please install the following:

`$ npm install expo-cli --global`

You may also need an [Expo account](https://expo.io/signup) to use the **Expo Client** for [iOS](https://apps.apple.com/app/apple-store/id982107779) and [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www).

\*\*\*Note: This project specifically targets iOS at this time.

### Libs used during the development

- [react-navigation](https://github.com/react-navigation/react-navigation)
  - [react-navigation/bottom-tabs](https://reactnavigation.org/docs/tab-based-navigation)
  - [react-navigation/native-stack](https://reactnavigation.org/docs/hello-react-navigation)
- [react-native-paper](https://callstack.github.io/react-native-paper/index.html)
- [react-native-vector-icons](https://oblador.github.io/react-native-vector-icons

### APIs

- [TMDb](https://developers.themoviedb.org/3/movies/get-upcoming)

## Running locally

As others projects, you will need some requirements to run:

#### Requirements

- [Node.js](https://nodejs.org/) (latest)
- [Xcode For running on Simulator]

#### How to run

- `git clone https://github.com/livein21st/MovieAppRN.git`
- `npm install`
- `expo start`

#### Easy explore the app on Expo Go app on mobile

- [DownloadExpoGoAppMobile](https://expo.dev/client)

Scan the QR Code to Run the App

![Scan QR-CODE](./assets/appQR.png | width="400" height="400")

## TBD

- Further implementation of api.js for fetching more than one page of upcoing movie list
- Search qeury request in the api
