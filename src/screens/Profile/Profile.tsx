import React, { FC, useCallback } from "react";
import { SafeAreaView, Text, TouchableOpacity } from "@components";
import styles from "./styles";
import { Navigation } from "react-native-navigation";
import { colors } from "@constants";
import { screensId } from "../../_AppNavigator";


type Props = { componentId: string } & {
}

const Profile: FC<Props> = (props) => {
  const changeTabBarColor = useCallback(() => {
    Navigation.mergeOptions(props.componentId, {
      topBar: {
        backButton: {
          color: colors.WHITE
        },
        background: {
          color: colors.BLACK
        }
      }
    });
  }, [])
  const changeBackgroundColorInfoScreen = useCallback(() => {
    Navigation.mergeOptions(screensId.Information, {
      layout: {
        backgroundColor: colors.WHITE
      },
      
    });
  }, [])

  return <SafeAreaView style={styles.container}>
    <Text style={styles.title}>Profile screen</Text>
    <TouchableOpacity onPress={changeTabBarColor}>
      <Text style={styles.changeColorText}>Change topBar color</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={changeBackgroundColorInfoScreen}>
      <Text style={styles.changeColorText}>Change background color in Information Screen</Text>
    </TouchableOpacity>
  </SafeAreaView>
};

export default Profile;
