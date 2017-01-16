import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class Header extends Component {

    goBack = ()=>{
        const {navigator} = this.props
        navigator.pop()
    }

  render() {
    return (
      <View style={styles.root}>
        <TouchableOpacity onPress={this.goBack}>
            <Icon name='chevron-left' style={styles.back}/>
        </TouchableOpacity>
        <Text style={styles.text}>
          购物车
        </Text>
        <Icon name='rocket' style={styles.right}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    height:44,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#F5F5F5',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  back: {
    fontSize:20,
    color: '#900'
  },
  right: {
    fontSize:30,
    color: 'transparent'
  }
});