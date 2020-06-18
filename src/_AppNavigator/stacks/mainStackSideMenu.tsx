import {Navigation} from 'react-native-navigation';
import {componentName, componentId, colors} from '@constants';
import assets from '@assets';

const MainStackSideMenu = () => {
  Navigation.setRoot({
    root: {
      sideMenu: {
        id: 'SideMenuId',
        center: {
          stack: {
            id: 'AppRoot',
            children: [
              {
                component: {
                  name: componentName.Main,
                  options: {
                    topBar: {
                      leftButtons: [
                        {
                          icon: assets.SIDE_MENU_ICON,
                          id: componentId.SideMenuButtonId,
                          component: {
                            name: componentName.SideMenuButton,
                          },
                        },
                      ],
                    },
                  },
                },
              },
            ],
          },
        },
        left: {
          component: {
            name: componentName.SideMenu,
            options: {
              layout: {
                backgroundColor: colors.WHITE,
              },
            },
          },
        },
      },
    },
  });
};
export default MainStackSideMenu;
