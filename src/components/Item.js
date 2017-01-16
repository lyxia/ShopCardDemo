import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text
} from 'react-native';

import Cricle from './Circle'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
  },
  img: {
    width: 90,
    height: 90,
    marginHorizontal:10
  },
  content: {
    flex:1,
    justifyContent: 'space-between',
    alignSelf: 'stretch'
  },
  name: {
    fontSize:16
  },
  pricesAndControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  prices: {

  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems:'center'
  },
  button: {
    borderWidth: StyleSheet.hairlineWidth,
    padding:5
  },
  buttonText: {
  },
  count:{
    marginHorizontal:5
  },
});

export default class Item extends Component {

  select = ()=>{
    console.log('click check')
    this.props.select(this.props.index)
  }

  increment = ()=>{
    this.props.increment(this.props.index)
  }

  decreasing = ()=>{
    this.props.decreasing(this.props.index)
  }

  render() {
    const {index, data:{id, name, price, count, img, checked}} = this.props
    return (
      <View style={styles.root}>
        <Cricle select={this.select} checked={checked}/>
        <Image style={styles.img} source={{uri: img}}/>
        <View style={styles.content}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.pricesAndControls}>
            <Text style={styles.prices}>¥{price.toFixed(2)}</Text>
            <View style={styles.controls}>
              <TouchableOpacity style={styles.button} onPress={this.decreasing}>
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.count}>{count}</Text>
              <TouchableOpacity style={styles.button} onPress={this.increment}>
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}