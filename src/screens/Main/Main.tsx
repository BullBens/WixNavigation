import React, {FC} from 'react';
import styles from './styles';
import {SafeAreaView, Image, Text} from '@components';
import assets from '@assets';

type TProps = {};
const Main: FC<TProps> = ({}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={assets.LOGO} />
      <Text style={styles.title}>wix/react-native-navigation</Text>
    </SafeAreaView>
  );
};

export default Main;
