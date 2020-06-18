# wix\react-native-navigation example

## Documentation

https://wix.github.io/react-native-navigation/docs/before-you-start/

### Install and start example application

- #### Clone repo
- #### npm i
- #### Clean build folders
  - #### cd ios && pod deintegrate && pod install - for IOS
  - #### cd android && gradlew clean - for Android
- #### Start project 
    - #### npm run ios - for IOS
    - #### npm run android - for Android

### Create new screen
#### npm run g:screen

### Create new component
#### npm run g:component

### Create new screen component
#### npm run g:screen-component

### Create new reducer
#### npm run g:reducer

### Create new helper
#### npm run g:helper

<!-- # IOS

1 remove row from Podfile
- pod 'ReactNativeNavigation', :podspec => '../node_modules/react-native-navigation/ReactNativeNavigation.podspec'

2 change AppDelegate.h AppDelegate.m

# Android

1 Update android/build.gradle
2 Update MainActivity.java
3 Update MainApplication.java -->
