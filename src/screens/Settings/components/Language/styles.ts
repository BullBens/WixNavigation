import {StyleSheet, Dimensions} from 'react-native';
import {colors, sizes} from '@constants';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: sizes.pts_24,
  },
  viewNavigate: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lang: {
    fontSize: sizes.pts_20,
  },
  button: {
    paddingHorizontal: sizes.pts_16,
    paddingVertical: sizes.pts_8,
    marginHorizontal: sizes.pts_24,
    borderBottomColor: colors.RED,
    borderBottomWidth: 1,
  },
  langView: {
    alignItems: 'center',
  },
});
