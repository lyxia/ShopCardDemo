import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import {connect} from 'react-redux'
import CardAction from '../datas/CardAction'

import Header from '../components/Header'
import Footer from '../components/Footer'
import ItemList from '../components/ItemList'

class ShopCart extends Component {

  render() {
    const {navigator} = this.props
    return (
      <View style={styles.root}>
        <Header navigator={navigator}/>
        <ItemList 
          cards={this.props.cards} 
          toggleCheck={this.props.toggleCheck}
          decreasing={this.props.decreasing}
          increment={this.props.increment}
        />
        <Footer 
          checkedAll={this.props.checkedAll} 
          unCheckedAll={this.props.unCheckedAll}
          cards={this.props.cards}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

function makeStoreToProps(store) {
  return {
    cards: store.ShopCard.toJS()
  }
}

function makeDispatchToProps(dispatch) {
  return {
    toggleCheck: (index)=>{
      dispatch(CardAction.toggleCardChecked(index))
    },
    checkedAll: ()=>{
      dispatch(CardAction.checkedAllCard())
    },
    unCheckedAll: ()=>{
      dispatch(CardAction.unCheckAllCard())
    },
    decreasing: (index)=>{
      dispatch(CardAction.decreasingCard(index))
    },
    increment: (index)=>{
      dispatch(CardAction.increasingCard(index))
    }
  }
}

module.exports = connect(makeStoreToProps,makeDispatchToProps)(ShopCart)