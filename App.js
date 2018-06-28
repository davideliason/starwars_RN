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
  View
} from 'react-native';

const platform = Platform.select({
  ios: 'IOS',
  android: 'Android',
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: "Luke Skywalker"
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.intro}>
          Star Wars
        </Text>
        <Text style={styles.platform}>
          Person: {this.state.person}
        </Text>
        <Text style={styles.platform}>
          {platform}
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
  platform: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
