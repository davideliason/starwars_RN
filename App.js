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

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.intro}>
          Star Wars
        </Text>
        <Text style={styles.platform}>
          Good stuff here
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
