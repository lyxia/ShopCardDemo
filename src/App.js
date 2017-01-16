import React, { Component } from 'react';
import {
  Navigator,
  View,
  StyleSheet
} from 'react-native';

import Index from './pages/Index'
import {Provider} from 'react-redux'
import configureStore from './datas/configureStore'

const INITIAL_ROUTE = {
    component: Index
}

const styles = StyleSheet.create({
    root: {
        flex:1,
        paddingTop: 20
    }
})

const store = configureStore()

export default class App extends Component {

    renderScene = (route, navigator) => {
        const Comp = route.component
        return (
            <Comp navigator={navigator} route={route}/>
        )
    }

  render() {
    return (
        <Provider store={store}>
            <Navigator
            style={styles.root}
            initialRoute = {INITIAL_ROUTE}
            renderScene = {this.renderScene}
            />
        </Provider>
    );
  }
}