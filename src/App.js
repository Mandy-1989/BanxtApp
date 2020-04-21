/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import { RootStack } from "@navigation/RootStack"
import NavigationService from "./navigation/NavigationService"
import { createAppContainer } from "react-navigation"
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '@redux/store/configureStore';

// const store = configureStore()

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <AppContainer
      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef)
      }}
    />

    // return <Provider>
    //   <Apps
    //     ref={navigatorRef => {
    //       NavigationService.setTopLevelNavigator(navigatorRef)
    //     }}
    //   />
    // </Provider>
  }
}

const AppContainer = createAppContainer(RootStack);
