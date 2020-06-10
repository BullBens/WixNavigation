import { screensName } from "@constants"

export type TScreenParams = {
	Initializing: TPropsScreen & {}
	Auth: TPropsScreen & {}
	Settings: TPropsScreen & {
		appGlobalState: any
	}
	Example: TPropsScreen & {}
	Main: TPropsScreen & {}
}



type TPropsScreen = any
// type TPropsScreen = {
// 	dispatch: any,
// 	componentId: string,
	
// }