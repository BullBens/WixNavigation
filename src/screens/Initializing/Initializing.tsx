import React from 'react';
import {useEffect, useState} from '@hooks';
import {View, Text, TouchableOpacity, Image} from '@components';
import {TScreenParams, TGlobalState} from '@typings';
import {connect} from 'react-redux';
import styles from './styles';
import MainStackBottomTab from '../../_AppNavigator/stacks/mainStackBottomTab';
import MainStackSideMenu from '../../_AppNavigator/stacks/mainStackSideMenu';
import assets from '@assets';

const Initializing: React.FC<TProps> = ({appLang}) => {
  // Initializing screen data.
  const [typeNavigation, setTypeNavigation] = useState<'sideMenu' | 'bottomTab' | null>(null);

  useEffect(() => {
    typeNavigation === null ? null : typeNavigation == 'sideMenu' ? MainStackSideMenu() : MainStackBottomTab();
  }, [typeNavigation, appLang]);

  return (
    <View style={styles.container}>
      <View style={styles.logoView}>
        <Image source={assets.LOGO} />
        <Text style={styles.titleStyle}>wix/react-native-navigation</Text>
      </View>
      <View style={styles.setNavigationView}>
        <TouchableOpacity style={styles.btnStyle} onPress={() => setTypeNavigation('sideMenu')}>
          <Text style={styles.titleStyle}>SideMenu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnStyle} onPress={() => setTypeNavigation('bottomTab')}>
          <Text style={styles.titleStyle}>BottomTab</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = (state: TGlobalState) => ({
  appLang: state.appLang,
});

export default connect(mapStateToProps)(Initializing);

type TProps = TScreenParams['Initializing'] & {};
