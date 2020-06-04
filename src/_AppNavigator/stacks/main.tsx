import {Navigation} from 'react-native-navigation';
import {HOME, FAVORITES, screensId} from '../index';
import {colors} from '@constants';
import assets from '@assets';
import {Platform} from 'react-native';

let homeIcon = Platform.OS === 'ios' ? 'home' : assets.HOME_ICON;
let favoriteIcon = Platform.OS === 'ios' ? 'favorite' : assets.FAVORITE_ICON;
const MainStack = () => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: 'BottomTabsId',
        options: {
          bottomTabs: {
            backgroundColor: colors.BLACK,
            animate: true,
            drawBehind: true,
          },
        },
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    id: screensId.Home,
                    name: HOME,
                    options: {
                      topBar: {
                        background: {
                          color: colors.RED,
                        },
                        visible: false,
                        animate: false,
                      },
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  selectedIconColor: colors.RED,
                  fontSize: 14,
                  text: 'Home',
                  icon: homeIcon,
                  iconColor: colors.WHITE,
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    id: screensId.Favorites,
                    name: FAVORITES,
                    options: {
                      animations: {
                        setStackRoot: {
                          x: {
                            from: 0,
                            to: 1,
                            duration: 1000,
                            startDelay: 400,
                          },
                        },
                      },
                      topBar: {
                        visible: false,
                      },
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  fontSize: 14,
                  selectedIconColor: colors.RED,
                  iconColor: colors.WHITE,
                  disableIconTint: true,
                  icon: favoriteIcon,
                  text: 'Favorites',
                },
              },
            },
          },
        ],
      },
    },
  });
};
export default MainStack;
