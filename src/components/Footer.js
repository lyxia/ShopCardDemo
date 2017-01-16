import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Circle from './Circle'

export default class Footer extends Component {

    constructor(props){
        super(props)
        this.state = {
            checked: false,
        }
    }

    select = ()=>{
      if(this.checked()) {
        this.props.unCheckedAll()
      } else {
        this.props.checkedAll()
      }
    }

    totalPrices = (()=>{
      return this.props.cards.reduce((a,b)=>{
        if(b.checked) {
          return a + b.price * b.count
        } else {
          return a
        }
      },0)
    })

    totalCount = (()=>{
      return this.props.cards.reduce((a,b)=>{
        if(b.checked) {
          return a+b.count
        } else {
          return a
        }
      },0)
    })

    checked = (()=>{
       for(index in this.props.cards) {
         const card = this.props.cards[index]
         if(!card.checked) {
           return false
         }
       }
       return true
    })

  render() {
    return (
      <View style={styles.root}>
        <View style={styles.selectWrapper}>
            <Circle checked={this.checked()} select={this.select}/>
            <Text style={styles.selectText}>全选</Text>
        </View>
        <Text>总计：¥{this.totalPrices()}</Text>
        <TouchableOpacity
            style = {styles.checkout}
            onPress = {this.checkout}
        >
            <Text style={styles.ckeckoutText}>去结算({this.totalCount()})</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    position:'absolute',
    bottom:0,
    left:0,
    right:0,
    flexDirection: 'row',
    height:50,
    justifyContent: 'space-between',
    borderTopColor:'#F5F5F5',
    borderTopWidth:StyleSheet.hairlineWidth,
    alignItems: 'center'
  },
  selectWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20
  },
  selectAll: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderColor: '#000',
    borderWidth: StyleSheet.hairlineWidth,
  },
  checked: {
    backgroundColor: '#f23030',
  },
  selectText: {
    marginLeft: 5,
  },
  checkout: {
      backgroundColor: '#f23030',
      paddingHorizontal: 20,
      height:50,
      justifyContent: 'center',
      
  },
  ckeckoutText: {
      color: '#fff',
      fontSize:18,
  }
});