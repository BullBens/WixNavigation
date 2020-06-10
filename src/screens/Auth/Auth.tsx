import React from 'react'
import { useEffect, useCallback, useMemo, useTranslation, useState } from '@hooks'
import { View, Text } from '@components'
import { TScreenParams } from '@typings'
import {connect} from 'react-redux';
import styles from './styles';

const Auth: React.FC<TProps> = (props, {}) => {
	// Auth screen data.
	const { t } = useTranslation()

	return (
		<View style={styles.container}>
			<Text>AuthScreen</Text>
		</View>
	)
}

const mapStateToProps = (state: any) => ({
	
});

export default connect(mapStateToProps)(Auth);

type TProps = TScreenParams['Auth'] & {

}