import { StyleSheet, Dimensions } from 'react-native'
import { colors } from '@constants'

const { width } = Dimensions.get('window')

export default StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	title: {
		fontSize: 24,

	},
	viewNavigate: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	lang: {
		fontSize: 20
	},
	button: {
		paddingHorizontal: 16,
		paddingVertical: 8,
		marginHorizontal: 24,
		borderBottomColor: colors.RED,
		borderBottomWidth: 1,
	},
	langView: {
		alignItems: 'center'
	}
})



