import React from 'react';
import {useCallback} from '@hooks';
import {View, Text, TouchableOpacity} from '@components';
import {TScreenParams, TGlobalState} from '@typings';
import {connect} from 'react-redux';
import styles from './styles';
import {Navigation} from 'react-native-navigation';
import {componentName} from '@constants';

const Main: React.FC<TProps> = ({componentId}) => {
  const onPressHandleOpenNativeModal = useCallback(() => {
    Navigation.showModal({
      stack: {
        children: [
          {
            component: {
              name: componentName.Modal,
              passProps: {
                text: 'Props to Modal',
              },
              options: {
                topBar: {
                  title: {
                    text: 'Modal',
                  },
                },
              },
            },
          },
        ],
      },
    });
  }, []);

  const onHandlePressOpenNewScreen = useCallback(() => {
    Navigation.push(componentId, {
      component: {
        name: componentName.Information,
        options: {
          sideMenu: {
            left: {
              enabled: false,
              visible: false,
            },
          },
          bottomTabs: {
            visible: false,
          },
        },
      },
    });
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnStyle} onPress={onPressHandleOpenNativeModal}>
        <Text>Open native Modal</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnStyle} onPress={onHandlePressOpenNewScreen}>
        <Text>Open information screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state: TGlobalState) => ({});

export default connect(mapStateToProps)(Main);

type TProps = TScreenParams['Main'] & {};
