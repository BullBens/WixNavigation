const SET_APP_LANG = '[appLang] SET_APP_LANG';
const RESET_APP_LANG = '[appLang] RESET_APP_LANG';

const initialstate = 'en';

export default (state = initialstate, action: any) => {
  switch (action.type) {
    case SET_APP_LANG:
      return action.val;
    case RESET_APP_LANG:
      return initialstate;
    default:
      return state;
  }
};

export const setAppLang = (val: string, ) => ({ val, type: SET_APP_LANG });
export const resetAppLang = () => ({ type: RESET_APP_LANG });
