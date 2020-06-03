import { Navigation } from "react-native-navigation";
import { HOME, FAVORITES, screensId, PROFILE } from "../index";
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
                    // animations: {
                    //     setRoot: {
                    //         x: {
                    //             from: 0, // Mandatory, initial value
                    //             to: 1, // Mandatory, end value
                    //             duration: 1000, // Default value is 300 ms
                    //             startDelay: 400, // Default value is 0
                    //         },
                    //         scaleX: {


                    //             from: 0, // Mandatory, initial value
                    //             to: 1, // Mandatory, end value
                    //             duration: 1000, // Default value is 300 ms
                    //             startDelay: 400,

                    //         },
                    //         alpha: {
                    //             from: 0, // Mandatory, initial value
                    //             to: 1, // Mandatory, end value

                    //             duration: 400, // Default value is 300 ms
                    //             startDelay: 100, // Default value is 0
                    //             interpolation: 'accelerate' // Optional
                    //         }
                    //     }
                    // },
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
                                        id: screensId.Home,
                                        name: HOME,
                                        options: {
                                            topBar: {
                                                background: {
                                                    color: colors.RED
                                                },
                                                visible: false,
                                                animate: false
                                            }
                                        }
                                    },
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
                                        id: screensId.Favorites,
                                        name: FAVORITES,
                                        options: {
                                            animations: {
                                                setStackRoot: {
                                                    x: {
                                                        from: 0, // Mandatory, initial value
                                                        to: 1, // Mandatory, end value
                                                        duration: 1000, // Default value is 300 ms
                                                        startDelay: 400, // Default value is 0
                                                    },
                                                    // scaleX: {
                                                    //     from: 0, // Mandatory, initial value
                                                    //     to: 1, // Mandatory, end value
                                                    //     duration: 1000, // Default value is 300 ms
                                                    //     startDelay: 400,

                                                    // },
                                                    // alpha: {
                                                    //     from: 0, // Mandatory, initial value
                                                    //     to: 1, // Mandatory, end value

                                                    //     duration: 400, // Default value is 300 ms
                                                    //     startDelay: 100, // Default value is 0
                                                    //     interpolation: 'accelerate' // Optional
                                                    // }
                                                }
                                            },
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
                                    text: "Favorites",
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
