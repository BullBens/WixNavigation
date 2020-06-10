import React from 'react'
import { useEffect, useCallback, useMemo, useTranslation, useState } from '@hooks'
import { View, Text } from '@components'
import { TScreenParams } from '@typings'
import {connect} from 'react-redux';
import styles from './styles';

const Example: React.FC<TProps> = (props, {}) => {
	// Example screen data.
	const { t } = useTranslation()

	return (
		<View style={styles.container}>
			<Text>ExampleScreen</Text>
		</View>
	)
}

const mapStateToProps = (state: any) => ({
	
});

export default connect(mapStateToProps)(Example);

type TProps = TScreenParams['Example'] & {

}