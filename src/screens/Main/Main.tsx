import React from 'react'
import { useEffect, useCallback, useMemo, useTranslation, useState } from '@hooks'
import { View, Text, TouchableOpacity } from '@components'
import { TScreenParams } from '@typings'
import { connect } from 'react-redux';
import styles from './styles';
import { Navigation } from 'react-native-navigation';
import { screensId, screensName, colors, sizes } from '@constants';

const Main: React.FC<TProps> = (props, { }) => {
	// Main screen data.
	const { t } = useTranslation()

	const onPress = useCallback(() => {
		Navigation.push(props.componentId, {
			component: {
				id: screensId.ExampleId,
				name: screensName.Example,
				options: {
					layout: {
						backgroundColor: colors.PURPURE
					},
					topBar: {
						backButton: {
							color: colors.WHITE
						},
						background: {
							color: colors.PURPURE_DARK
						},
						title: {
							color: colors.WHITE,
							text: 'Information'
						}
					},
					animations: {
						push: {
							content: {
								translationX: {
									from: sizes.width,
									to: 0,
									duration: 300
								}
							}
						}
					}
				}
			}
		});
	}, [])

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={onPress}>
				<Text>MainScreen</Text>
			</TouchableOpacity>
		</View>
	)
}

const mapStateToProps = (state: any) => ({

});

export default connect(mapStateToProps)(Main);

type TProps = TScreenParams['Main'] & {

}