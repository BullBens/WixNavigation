import {StyleSheet} from 'react-native';
import {colors, sizes} from '@constants';

export default StyleSheet.create({
  container: {
    marginVertical: sizes.pts_16,
    flexDirection: 'row',
  },
  btnStyle: {
    padding: sizes.pts_16,
    borderBottomWidth: 1,
    marginHorizontal: sizes.pts_16,
    borderBottomColor: colors.RED,
  },
  titleStyle: {
    fontSize: sizes.pts_16,
  },
});
