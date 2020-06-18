import {combineReducers} from 'redux';

export default combineReducers({
  appLang: require('./appLang').default,
  appTheme: require('./appTheme').default,
  // ADD NEW REDUCER
});
