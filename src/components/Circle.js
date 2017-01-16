import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';

export default class Circle extends Component {

  render() {
    return (
        <TouchableOpacity
            style={[styles.selectAll, (this.props.checked && styles.checked)]}
            onPress={this.props.select}
        />
    );
  }
}

const styles = StyleSheet.create({
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
});