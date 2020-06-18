/**
 * @format
 */

import { Navigation } from 'react-native-navigation';
import App from './src/App';
import { i18n } from '@services'; // need for React i18n initialization


Navigation.events().registerAppLaunchedListener(() => { App() });