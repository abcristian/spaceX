/**
 * @format
 */

import {AppRegistry} from "react-native";

import {name as appName} from "./app.json";
import App from "./src/App";

// To see network requests on React Native Debugger
GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;

AppRegistry.registerComponent(appName, () => App);
