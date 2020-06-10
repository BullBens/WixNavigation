import { Navigation } from "react-native-navigation";
import { screensName, screensId } from '@constants'
import { colors } from "@constants";
import assets from "@assets";

const MainStack = () => {
    Navigation.setRoot({
        root: {
            bottomTabs: {
                id: 'BottomTabsId',
                options: {
                    layout: {
                        backgroundColor: colors.WHITE
                    },
                    bottomTabs: {
                        backgroundColor: colors.BLACK,
                        animate: true,
                        drawBehind: true,
                    }
                },
                children: [
                    {
                        stack: {
                            children: [
                                {
                                    component: {
                                        id: screensId.SettingsId,
                                        name: screensName.Settings,
                                        options: {
                                            topBar: {
                                                visible: false,
                                            }
                                        }
                                    }
                                },
                            ],
                            options: {
                                bottomTab: {
                                    iconColor: colors.WHITE,
                                    selectedIconColor: colors.RED,
                                    icon: assets.HOME_ICON,
                                    text: "Home",
                                }
                            }
                        }
                    },
                    {
                        stack: {
                            children: [
                                {
                                    component: {
                                        id: screensId.SettingsId,
                                        name: screensName.Settings,
                                        options: {
                                            topBar: {
                                                visible: false,
                                            }
                                        }
                                    }
                                }
                            ],
                            options: {
                                bottomTab: {
                                    selectedIconColor: colors.RED,
                                    iconColor: colors.WHITE,
                                    icon: assets.FAVORITE_ICON,
                                    text: "Settings",
                                }
                            }
                        }
                    }
                ],
            }
        }
    })
}
export default MainStack
