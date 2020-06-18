import React from 'react';
import {useEffect} from '@hooks';
import {View} from '@components';
import {TScreenParams, TGlobalState} from '@typings';
import {connect} from 'react-redux';
import styles from './styles';
import Language from './components/Language';
import i18next from 'i18next';
import ChangeStackNavigator from './components/ChangeStackNavigator';

const Settings: React.FC<TProps> = (props) => {
  useEffect(() => {
    i18next.changeLanguage(props.appLang ? props.appLang : 'en');
  }, [props.appLang]);

  return (
    <View style={styles.container}>
      <Language {...props} />
      <ChangeStackNavigator />
    </View>
  );
};

const mapStateToProps = (state: TGlobalState) => ({
  appLang: state.appLang,
});

export default connect(mapStateToProps)(Settings);

type TProps = TScreenParams['Settings'] & {};
