import {Navigation} from 'react-native-navigation';
import {componentName, strings} from '@constants';
import {colors} from '@constants';
import assets from '@assets';

const MainStackBottomTab = () => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: 'BottomTabsId',
        options: {
          layout: {
            backgroundColor: colors.WHITE,
          },
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
                    name: componentName.Main,
                    options: {
                      topBar: {
                        visible: false,
                      },
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  iconColor: colors.WHITE,
                  selectedIconColor: colors.RED,
                  icon: assets.HOME_ICON,
                  text: strings.HOME,
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: componentName.Settings,
                    options: {
                      topBar: {
                        visible: false,
                      },
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  selectedIconColor: colors.RED,
                  iconColor: colors.WHITE,
                  icon: assets.SETTINGS_ICON,
                  text: strings.SETTINGS,
                },
              },
            },
          },
        ],
      },
    },
  });
};
export default MainStackBottomTab;
