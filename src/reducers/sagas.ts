import {all} from 'redux-saga/effects';
// ADD IMPORT
import { watchAppTheme } from './appTheme'

export default function* rootSaga() {
  yield all([
    // ADD WATCHER
		watchAppTheme(),
  ]);
}
