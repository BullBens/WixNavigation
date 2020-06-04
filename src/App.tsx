import RegisterComponent from './_AppNavigator/registerComponent';
import {Navigation} from 'react-native-navigation';
import {colors} from '@constants';
import MainStack from './_AppNavigator/stacks/main';


// Navigation.setDefaultOptions({
//   statusBar: {
//     style: 'dark',
//     backgroundColor: colors.WHITE
//   }
// })
RegisterComponent();
export default MainStack;
