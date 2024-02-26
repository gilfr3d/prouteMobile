import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {PaperProvider} from 'react-native-paper';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';

const Main = () => (
  <PaperProvider>
    <App />
  </PaperProvider>
);

AppRegistry.registerComponent(appName, () => Main);
