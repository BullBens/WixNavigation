import RegisterComponent from './_AppNavigator/registerComponent';
import { Navigation } from 'react-native-navigation';
import { colors } from '@constants';
import MainStack from './_AppNavigator/stacks/main';


RegisterComponent()

Navigation.setDefaultOptions({
  statusBar: {
    style: 'dark',
    backgroundColor: colors.WHITE
  }
})


export default MainStack;
