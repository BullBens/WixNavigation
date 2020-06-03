import { StyleSheet } from "react-native";
import { colors } from "@constants";

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    title: {
        paddingHorizontal: 32,
        textAlign: 'center',
        fontSize: 24,
        color: colors.BLACK
    },
    changeColorText: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 20,
        color: colors.WHITE,
        textDecorationLine: 'underline'
    }
})

export default styles