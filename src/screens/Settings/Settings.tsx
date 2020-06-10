import React from 'react'
import { useEffect, useCallback, useMemo, useTranslation, useState } from '@hooks'
import { View, Text, TouchableOpacity } from '@components'
import { TScreenParams } from '@typings'
import { connect } from 'react-redux';
import styles from './styles';
import Language from './components/Language';
import i18next from 'i18next';


const Settings: React.FC<TProps> = (props) => {
	useEffect(() => {
		i18next.changeLanguage(props.appLang ? props.appLang : 'en')
	}, [props.appLang])

	const { t } = useTranslation()
	return (
		<View style={styles.container}>
			<Language {...props} />
		</View>
	)
}

const mapStateToProps = (state: any) => ({
	appLang: state.appLang
});

export default connect(mapStateToProps)(Settings);

type TProps = TScreenParams['Settings'] & {

}