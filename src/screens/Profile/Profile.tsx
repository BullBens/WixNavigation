import React from 'react'
import { useEffect, useCallback, useMemo, useTranslation, useState } from '@hooks'
import { View, Text } from '@components'
import { TScreenParams,TGlobalState } from '@typings'
import {connect} from 'react-redux';
import styles from './styles';

const Profile: React.FC<TProps> = (props, {}) => {
	// Profile screen data.
	const { t } = useTranslation()

	return (
		<View style={styles.container}>
			<Text>ProfileScreen</Text>
		</View>
	)
}

const mapStateToProps = (state: TGlobalState) => ({
	
});

export default connect(mapStateToProps)(Profile);

type TProps = TScreenParams['Profile'] & {

}