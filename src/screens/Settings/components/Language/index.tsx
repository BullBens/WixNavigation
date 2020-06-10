import React from 'react'
import { useCallback, useMemo, useTranslation } from '@hooks'
import { View, Text, TouchableOpacity } from '@components'
import styles from './styles'
import { TScreenParams } from '@typings'
import { setAppLang } from '@reducers/appLang'
import i18next from 'i18next'

const Language: React.FC<TProps> = (props, { }) => {
	const { t } = useTranslation()
	const changeLanguage = useCallback((val: any) => {
		props.dispatch(setAppLang(val))
		// i18next.changeLanguage(val)
	}, [props]);

	return <View style={styles.container}>
		<Text style={styles.title}>{t('Language')}</Text>
		<View style={styles.langView}>
			<Text style={styles.lang}>{props.appLang}</Text>
			<View style={styles.viewNavigate}>
				<TouchableOpacity style={styles.button} onPress={() => changeLanguage('ua')}>
					<Text>ua</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => changeLanguage('en')}>
					<Text>Ua</Text>
				</TouchableOpacity>
			</View>
		</View>
	</View>
}

export default Language

type TProps = TScreenParams['Settings'] & {}