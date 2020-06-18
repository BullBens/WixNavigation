import React from 'react';
import {useCallback, useMemo} from '@hooks';
import {View, TouchableOpacity, Text} from '@components';
import styles from './styles';
import MainStackSideMenu from '../../../../_AppNavigator/stacks/mainStackSideMenu';
import MainStackBottomTab from '../../../../_AppNavigator/stacks/mainStackBottomTab';

type TProps = {};

const ChangeStackNavigator: React.FC<TProps> = ({}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnStyle} onPress={() => MainStackSideMenu()}>
        <Text style={styles.titleStyle}>SideMenu</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnStyle} onPress={() => MainStackBottomTab()}>
        <Text style={styles.titleStyle}>BottomTab</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChangeStackNavigator;
