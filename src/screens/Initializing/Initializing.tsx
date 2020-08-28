import * as React from 'react';
import {useEffect} from '@hooks';
import {TScreenParams, TGlobalState} from '@typings';
import {connect} from 'react-redux';
import styles from './styles';
import MainStackBottomTab from '../../_AppNavigator/stacks/mainStackBottomTab';
import { View } from 'react-native';

const Initializing: React.FC<TProps> = ({}) => {
  // Initializing screen data.

  useEffect(() => {
    MainStackBottomTab();
  }, []);

  return <View style={styles.container}></View>;
};

const mapStateToProps = (state: TGlobalState) => ({});

export default connect(mapStateToProps)(Initializing);

type TProps = TScreenParams['Initializing'] & {};
