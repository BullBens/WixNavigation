import * as React from 'react';
import {Text, Image, View, Linking, TouchableOpacity} from 'react-native';
import {useEffect, useCallback, useMemo, useTranslation, useState} from '@hooks';

import {TScreenParams} from '@typings';
import styles from './styles';
import {strings} from '@constants';

const Information: React.FC<TProps> = () => {
  // Information screen data.
  const url: string = 'https://wix.github.io/react-native-navigation/docs/before-you-start/';

  const openUrl = useCallback(() => {
    Linking.openURL(url);
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openUrl}>
        <Text style={styles.link}>{strings.HOME}</Text>
        <Image
          source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
          style={{flex: 1}}
        />
        <Image
          source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
          style={{flex: 1}}
        />
        <Image
          source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
          style={{flex: 1}}
        />
        <Image
          source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
          style={{flex: 1}}
        />
        <Image
          source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
          style={{flex: 1}}
        />
        <Image
          source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
          style={{flex: 1}}
        />
        <Image
          source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
          style={{flex: 1}}
        />
        <Image
          source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
          style={{flex: 1}}
        />
        <Image
          source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
          style={{flex: 1}}
        />
        <Image
          source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
          style={{flex: 1}}
        />
        <Image
          source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
          style={{flex: 1}}
        />
        <Image
          source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
          style={{flex: 1}}
        />
        <Image
          source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
          style={{flex: 1}}
        />
        <Image
          source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
          style={{flex: 1}}
        />
      </TouchableOpacity>
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
      <Image
        source={{uri: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'}}
        style={{flex: 1}}
      />
    </View>
  );
};

export default Information;

type TProps = TScreenParams['Information'] & {};
