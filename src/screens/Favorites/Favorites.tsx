import React, {FC, useCallback} from 'react';
import {SafeAreaView, Text, TouchableOpacity, Dimensions} from '@components';
import styles from './styles';
import {Navigation} from 'react-native-navigation';
import {INFORMATION, PROFILE, screensId} from '../../_AppNavigator';
import {colors} from '@constants';

type Props = {
  props: any;
};

const Favorites: FC<Props> = (props: any) => {
  const handlePress = useCallback(() => {
    Navigation.push(props.componentId, {
      component: {
        id: screensId.Information,
        name: INFORMATION,
        options: {
          layout: {
            componentBackgroundColor: colors.PURPURE,
            backgroundColor: colors.PURPURE,
          },
          topBar: {
            backButton: {
              color: colors.WHITE,
            },
            background: {
              color: colors.PURPURE_DARK,
            },
            title: {
              color: colors.WHITE,
              text: 'Information',
            },
          },
          animations: {
            push: {
              content: {
                translationX: {
                  from: require('react-native').Dimensions.get('window').width,
                  to: 0,
                  duration: 300,
                },
              },
            },
          },
        },
      },
    });
  }, []);

  const goToProfile = useCallback(() => {
    Navigation.push(props.componentId, {
      component: {
        name: PROFILE,
        id: screensId.Profile,
        options: {
          layout: {
            componentBackgroundColor: colors.BLUE,
            backgroundColor: colors.BLUE,
          },
        },
      },
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Favorites Screen</Text>
      <TouchableOpacity onPress={handlePress}>
        <Text style={styles.infoText}>information</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToProfile}>
        <Text style={styles.infoText}>Profile</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Favorites;
