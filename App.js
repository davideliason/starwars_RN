/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      livingBeing: "",
      templivingBeing: "",
      starship: "",
      tempStarship: "",
      planet: "",
      tempPlanet: "",
      text: "",
      data: ""
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.intro}>
          Star Wars Info
        </Text>
        <Text style={styles.intro}>
          Learn about a living being, planet, or starship..
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Find a living being"
          onChangeText={(templivingBeing) => this.setState({ templivingBeing })}
        />

        <Text style={styles.intro}>
          templivingBeing: {this.state.templivingBeing}
        </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  intro: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    height: 40,
    borderWidth: 2
  },
});
