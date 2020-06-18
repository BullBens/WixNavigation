import {Navigation} from 'react-native-navigation';
import {componentName} from '@constants';

const initStack = () => {
  Navigation.setRoot({
    root: {
      component: {
        name: componentName.Initializing,
      },
    },
  });
};
export default initStack;
