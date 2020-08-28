import * as React from 'react';
import {useCallback} from '@hooks';
import {TScreenParams, TGlobalState} from '@typings';
import {connect} from 'react-redux';
import styles from './styles';
import {Navigation} from 'react-native-navigation';
import {componentName} from '@constants';
import {View, TouchableOpacity, Text} from 'react-native';

const Main: React.FC<TProps> = ({componentId}) => {
  const onHandlePressOpenNewScreen = useCallback(() => {
    debugger;
    Navigation.push(componentId, {
      component: {
        name: componentName.Information,
      },
    });
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btnStyle}
        onPress={() => {
          Navigation.push(componentId, {
            component: {
              name: componentName.Information,
            },
          });
        }}
      >
        <Text>Open information screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state: TGlobalState) => ({});

export default connect(mapStateToProps)(Main);

type TProps = TScreenParams['Main'] & {};
