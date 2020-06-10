import { Navigation } from "react-native-navigation";
import { screensName, screensId } from '@constants'
import { colors } from "@constants";
import assets from "@assets";

const initStack = () => {
    Navigation.setRoot({
        root: {
            component: {
                id: screensId.InitializingId,
                name: screensName.Initializing
            }
        },
    });
}
export default initStack
