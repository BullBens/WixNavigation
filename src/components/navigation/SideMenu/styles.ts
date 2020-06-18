import {StyleSheet, Dimensions} from 'react-native';
import { colors } from '@constants';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
    flex: 1,
  },
});
