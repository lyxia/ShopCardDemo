import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView
} from 'react-native';

import Item from './Item'

export default class ItemList extends Component {
  render() {
    const cardData = this.props.cards
    return (
      <ScrollView>
        {cardData.map((data, index)=>{
          return (
            <Item 
            data={data} 
            key={data.id} 
            index={index} 
            select={this.props.toggleCheck}
            increment={this.props.increment}
            decreasing={this.props.decreasing}
            />
          )
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
});