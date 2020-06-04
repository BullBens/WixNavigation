import React, {useEffect, FC} from 'react';
import styles from './styles';
import {SafeAreaView, Text} from '@components';

type Props = {};

const More: FC<Props> = ({}) => {
  useEffect(() => {}, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>More Native Modal</Text>
    </SafeAreaView>
  );
};

export default More;
