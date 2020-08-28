export type TScreenParams = {
  Information: TPropsScreen & {};

  Main: TPropsScreen & {
    componentId: string;
  };
  Initializing: TPropsScreen & {};
};

type TPropsScreen = any;
