export type TScreenParams = {
	Profile: TPropsScreen & {}
	Test3: TPropsScreen & {}
	Test2: TPropsScreen & {}
	Test1: TPropsScreen & {}
	Test: TPropsScreen & {}
  Information: TPropsScreen & {};
  Modal: TPropsScreen & {
    text: string;
  };
  Initializing: TPropsScreen & {};
  Auth: TPropsScreen & {};
  Settings: TPropsScreen & {
    appGlobalState: any;
  };
  Main: TPropsScreen & {
    componentId: string;
  };
};

type TPropsScreen = any;
// type TPropsScreen = {
// 	dispatch: any,
// 	componentId: string,

// }
