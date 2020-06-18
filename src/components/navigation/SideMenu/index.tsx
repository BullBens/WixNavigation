import React from 'react';
import {useCallback, useMemo} from '@hooks';
import {View, TouchableOpacity, Text} from '@components';
import styles from './styles';
import {SafeAreaView} from 'react-native';
import {componentName} from '@constants';
import {Navigation} from 'react-native-navigation';

const SideMenu: React.FC<TProps> = (props) => {
  const handlePress = useCallback((screenName: string) => {
    Navigation.push('AppRoot', {
      component: {
        name: screenName,
        options: {
          sideMenu: {
            openGestureMode: 'bezel',
            left: {
              enabled: false,
              visible: false,
            },
          },
        },
      },
    });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity onPress={() => handlePress(componentName.Settings)}>
          <Text>Setting</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SideMenu;

type TProps = {};
