import {Platform} from 'react-native';

export default {
  LOGO: require('./images/logo.png'),
  HOME_ICON: Platform.OS == 'ios' ? 'home' : require('./images/home.png'),
  SETTINGS_ICON: Platform.OS == 'ios' ? 'settings' : require('./images/settings.png'),
  SIDE_MENU_ICON: Platform.OS == 'ios' ? 'sideMenu' : require('./images/sideMenu.png'),
};
