import React from 'react';
import {useEffect, useCallback, useMemo, useTranslation, useState} from '@hooks';
import {View, Text, TouchableOpacity, Linking} from '@components';
import {TScreenParams, TGlobalState} from '@typings';
import {connect} from 'react-redux';
import styles from './styles';

const Information: React.FC<TProps> = (props, {}) => {
  // Information screen data.
  const url: string = 'https://wix.github.io/react-native-navigation/docs/before-you-start/';
  const {t} = useTranslation();

  const openUrl = useCallback(() => {
    Linking.openURL(url);
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openUrl}>
        <Text style={styles.link}>{url}</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state: TGlobalState) => ({});

export default connect(mapStateToProps)(Information);

type TProps = TScreenParams['Information'] & {};
