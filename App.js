/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import * as React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

type Props = {};
type State = {
  input: string
};
export default class App extends React.PureComponent<Props, State> {
  state = {
    input: ''
  };

  setInput= (input) => {
    this.setState({
      input,
    })
  };

  render() {
    const { input } = this.state;


    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <TextInput style={styles.input} value={input} onChangeText={this.setInput} />
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontFamily: 'Muli-Black'
  },
  input: {
    borderWidth: 1,
    color: '#333333',
    fontSize: 20,
    height: 40,
    lineHeight: 20,
    width: 200,
    marginBottom: 5,
  },
});
