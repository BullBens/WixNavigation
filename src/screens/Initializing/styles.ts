import {StyleSheet} from '@components';
import {colors, sizes} from '@constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  logoView: {
    alignItems: 'center',
  },
  setNavigationView: {
    flexDirection: 'row',
  },
  btnStyle: {
    padding: 16,
    borderBottomWidth: 1,
    marginHorizontal: 16,
    borderBottomColor: colors.RED,
  },
  titleStyle: {
    fontSize: 16,
  },
});
