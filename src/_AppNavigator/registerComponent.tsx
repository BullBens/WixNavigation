import React from 'react';
import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import storage from '../store';
import {
  // IMPORT NEW SCREEN
  Main,
  Information,
  Initializing,
} from '@screens';

import // IMPORT NEW COMPONENT

'@components';

import {componentName} from '@constants';
import {ActivityIndicator} from 'react-native';

export default () => {
  const Components = new Map<string, React.FC<any>>();
  // SET NEW COMPONENT

  Components.set(componentName.Information, Information);
  Components.set(componentName.Main, Main);
  Components.set(componentName.Initializing, Initializing);

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
