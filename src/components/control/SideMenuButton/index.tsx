import React from 'react';
import {useCallback} from '@hooks';
import {TouchableOpacity, Text} from 'react-native';
import {Navigation} from 'react-native-navigation';

const SideMenuButton: React.FC<TProps> = ({}) => {
  const toggleDrawer = useCallback(() => {
    Navigation.mergeOptions('AppRoot', {
      sideMenu: {
        left: {
          visible: true,
        },
      },
    });
  }, []);
  return (
    <TouchableOpacity onPress={toggleDrawer}>
      <Text>SideMenu</Text>
    </TouchableOpacity>
  );
};

export default SideMenuButton;

type TProps = {};
