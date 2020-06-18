import React from 'react';
import {useEffect, useCallback, useMemo, useTranslation, useState} from '@hooks';
import {View, Text} from '@components';
import {TScreenParams, TGlobalState} from '@typings';
import {connect} from 'react-redux';
import styles from './styles';

const Modal: React.FC<TProps> = ({text}) => {
  // Modal screen data.
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
    </View>
  );
};

const mapStateToProps = (state: TGlobalState) => ({});

export default connect(mapStateToProps)(Modal);

type TProps = TScreenParams['Modal'] & {};
