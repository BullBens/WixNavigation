import React from 'react'
import { useEffect, useCallback, useMemo, useTranslation, useState } from '@hooks'
import { View, Text } from '@components'
import { TScreenParams } from '@typings'
import { connect } from 'react-redux';
import styles from './styles';
import MainStack from '../../_AppNavigator/stacks/main';
import initStack from '../../_AppNavigator/stacks/init';
import authStack from '../../_AppNavigator/stacks/auth';
import i18next from 'i18next';

const Initializing: React.FC<TProps> = ({ appLang }) => {
	// Initializing screen data.
	const { t } = useTranslation()
	const [isAuth, setIsAuth] = useState(true)

	useEffect(() => {

		isAuth ? MainStack() : authStack()
		return () => {
			debugger
		}
	}, [isAuth, appLang])


	return (
		<View style={styles.container}>
			<Text>InitializingScreen</Text>
		</View>
	)
}

const mapStateToProps = (state: any) => ({
	appLang: state.appLang
});

export default connect(mapStateToProps)(Initializing);

type TProps = TScreenParams['Initializing'] & {

}