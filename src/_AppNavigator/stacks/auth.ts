import { Navigation } from "react-native-navigation";
import { screensName, screensId } from '@constants'
import { colors } from "@constants";
import assets from "@assets";

const authStack = () => {
    Navigation.setRoot({
        root: {
            component: {
                id: screensId.AuthId,
                name: screensName.Auth
            }
        },
    });
}
export default authStack
