import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import ShopCart from './ShopCart'

export default class Index extends Component {
    gotoShopCart = ()=> {
        const {navigator} = this.props
        navigator.push({
            component: ShopCart
        })
    }

  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.text}>
          这里是首页
        </Text>
        <Button onPress={this.gotoShopCart} title='点击这里跳转购物车'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});