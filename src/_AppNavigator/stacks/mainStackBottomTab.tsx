import {Navigation} from 'react-native-navigation';
import {componentName, strings, componentId} from '@constants';
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
        ],
      },
    },
  });
};
export default MainStackBottomTab;
