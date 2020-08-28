import {colors, sizes} from '@constants';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  link: {
    paddingHorizontal: 16,
    textAlign: 'center',
    color: colors.RED,
    textDecorationLine: 'underline',
  },
});
