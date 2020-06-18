import {takeLatest, put, call, select} from 'redux-saga/effects';

const GET_APP_THEME = '[appTheme] GET_APP_THEME';
const SET_APP_THEME = '[appTheme] SET_APP_THEME';
const RESET_APP_THEME = '[appTheme] RESET_APP_THEME';

const initialstate = {};

export default (state = initialstate, action: any) => {
  switch (action.type) {
    case SET_APP_THEME:
      return Object.assign({}, {...state, ...action.data});
    case RESET_APP_THEME:
      return initialstate;
    default:
      return state;
  }
};

export const getAppTheme = () => ({type: GET_APP_THEME});
export const setAppTheme = (data: any) => ({data, type: SET_APP_THEME});
export const resetAppTheme = () => ({type: RESET_APP_THEME});

export function* watchAppTheme() {
  yield takeLatest(GET_APP_THEME, getAppThemeAsync);
}

export function* getAppThemeAsync() {
  // const { accessToken } = yield select(state => state.profile)
  try {
  } catch (e) {
    console.log(e, 'getAppThemeAsync ERROR');
  }
}
