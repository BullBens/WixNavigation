import React, { FC, useCallback } from "react";
import { SafeAreaView, Text, TouchableOpacity } from "@components";
import styles from "./styles";
import { Navigation } from "react-native-navigation";
import { colors, screensName, screensId } from "@constants";


type Props = { componentId: string } & {
}

const Information: FC<Props> = (props, {

}) => {

  const goToProfile = useCallback(() => {
    Navigation.push(props.componentId, {
      component: {
        id: screensId.ProfileId,
        name: screensName.Profile,
        options: {
          layout: {
            backgroundColor: colors.PURPURE_DARK,
          }
        }
      }
    });
  }, [])

  return <SafeAreaView style={styles.container}>
    <Text style={styles.title}>We also assume you are working on a Mac with XCode and Android Studio installed and setup. You can also make it work in a Linux distribution, of course, but in that case bare in mind that some sections of the docs that deal with iOS might not be relevant to you.</Text>
    <TouchableOpacity onPress={goToProfile}>
      <Text style={styles.infoText}>Profile</Text>
    </TouchableOpacity>
  </SafeAreaView>
};

export default Information;
