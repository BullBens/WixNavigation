import React, { FC, useEffect } from 'react';
import RegisterComponent from './_AppNavigator/registerComponent';
import { Navigation } from 'react-native-navigation';
import { colors, screensName, screensId } from '@constants';
import MainStack from './_AppNavigator/stacks/main';
import AsyncStorage from '@react-native-community/async-storage';
import { View, Text } from '@components';
import { connect } from 'react-redux';
import initStack from './_AppNavigator/stacks/init';

RegisterComponent()

Navigation.setDefaultOptions({
  statusBar: {
    style: 'dark',
    backgroundColor: colors.WHITE
  }
})


export default initStack

