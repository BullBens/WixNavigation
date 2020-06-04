import {HOME, FAVORITES, INFORMATION, PROFILE, MORE} from '.';
import {Navigation} from 'react-native-navigation';
import React from 'react';
import {Home, Favorites, Information, Profile, More} from '@screens';
export default () => {
  const Screens = new Map<string, React.FC<any>>();
  Screens.set(HOME, Home);
  Screens.set(FAVORITES, Favorites);
  Screens.set(INFORMATION, Information);
  Screens.set(PROFILE, Profile);
  Screens.set(MORE, More);

  Navigation.registerComponent(HOME, () => Home);
  Navigation.registerComponent(FAVORITES, () => Favorites);
  Navigation.registerComponent(INFORMATION, () => Information);
  Navigation.registerComponent(PROFILE, () => Profile);
  Navigation.registerComponent(MORE, () => More);

  Screens.forEach((C: any, key: any) => {
    Navigation.registerComponent(key, () => (props) => <C {...props} />);
  });
};
