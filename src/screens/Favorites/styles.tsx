import { StyleSheet } from "react-native";
import { colors } from "@constants";

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    title: {
        fontSize: 24,
        color: colors.RED
    },
    infoText: {
        marginTop: 26,
        fontSize: 20,
        textDecorationLine: 'underline'
    }
})

export default styles