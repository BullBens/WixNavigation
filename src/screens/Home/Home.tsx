import React, { useEffect, FC } from 'react';
import styles from './styles';
import { SafeAreaView, Image, Text } from '@components';
import assets from '@assets';


type Props = {}

const Home: FC<Props> = ({ }) => {

  useEffect(() => {

  }, [])


  return (
    <SafeAreaView style={styles.container}>
      <Image source={assets.LOGO} />
      <Text style={styles.title}>wix/react-native-navigation</Text>
    </SafeAreaView>


  );
};

export default Home;
