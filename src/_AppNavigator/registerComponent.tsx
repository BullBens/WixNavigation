Navigation.registerComponent(screensName.Initializing, () => Initializing);
import React, { useEffect } from 'react'
import { Navigation } from "react-native-navigation";
import { Provider, connect } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import storage from '../store';
import {
    Main,
    Example,
    Settings,
    Auth,
    Initializing,
} from "@screens";
import { screensName } from '@constants'
import { ActivityIndicator } from 'react-native';


export default () => {
    const Screens = new Map<string, React.FC<any>>();

    //SET NEW SCREEN
    Screens.set(screensName.Initializing, Initializing);
    Screens.set(screensName.Auth, Auth);
    Screens.set(screensName.Settings, Settings);
    Screens.set(screensName.Example, Example);
    Screens.set(screensName.Main, Main);

    Screens.forEach((C: any, key: any) => {
        Navigation.registerComponent(key, () => (props) =>
            <Provider store={storage.store}>
                <PersistGate
                    loading={<ActivityIndicator size="large" />}
                    persistor={storage.persistor}
                >
                    <C {...props} {...C} />
                </PersistGate>
            </Provider>)

    })
}