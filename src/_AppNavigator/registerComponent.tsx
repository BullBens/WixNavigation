import React from 'react';
import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import storage from '../store';
import {
  // IMPORT NEW SCREEN
  Profile,
  Main,
  Settings,
  Initializing,
  Modal,
  Information,
} from '@screens';

import{
  // IMPORT NEW COMPONENT

}from '@components';

import {componentName} from '@constants';
import {ActivityIndicator} from 'react-native';
import {SideMenu, SideMenuButton} from '@components';

export default () => {
  const Components = new Map<string, React.FC<any>>();
  // SET NEW COMPONENT

  Components.set(componentName.Profile, Profile);
  Components.set(componentName.Information, Information);
  Components.set(componentName.Modal, Modal);
  Components.set(componentName.Initializing, Initializing);
  Components.set(componentName.Settings, Settings);
  Components.set(componentName.Main, Main);
  Components.set(componentName.SideMenu, SideMenu);
  Components.set(componentName.SideMenuButton, SideMenuButton);

  Components.forEach((C: any, key: any) => {
    Navigation.registerComponent(key, () => (props) => (
      <Provider store={storage.store}>
        <PersistGate loading={<ActivityIndicator size="large" />} persistor={storage.persistor}>
          <C {...props} {...C} />
        </PersistGate>
      </Provider>
    ));
  });
};
