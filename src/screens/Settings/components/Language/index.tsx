import React from 'react';
import {useCallback, useMemo, useTranslation} from '@hooks';
import {View, Text, TouchableOpacity} from '@components';
import styles from './styles';
import {TScreenParams, TGlobalState} from '@typings';
import {setAppLang} from '@reducers/appLang';
import i18next from 'i18next';

const Language: React.FC<TProps> = ({appLang, dispatch}) => {
  const {t} = useTranslation();
  const changeLanguage = useCallback((val: any) => {
    dispatch(setAppLang(val));
    // i18next.changeLanguage(val)
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('Language')}</Text>
      <View style={styles.langView}>
        <Text style={styles.lang}>{appLang}</Text>
        <View style={styles.viewNavigate}>
          <TouchableOpacity style={styles.button} onPress={() => changeLanguage('ua')}>
            <Text>Укр</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => changeLanguage('en')}>
            <Text>En</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Language;

type TProps = TScreenParams['Settings'] & {
  appLang: TGlobalState['appLang'];
  dispatch: TGlobalState['dispatch'];
};
