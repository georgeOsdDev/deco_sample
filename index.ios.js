/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native'

class Project extends Component {
  constructor(){
    super();
    this.state = {text: 'Hello', uri: 'https://unsplash.it/600/400/?random'}
  }
  
  
  componentDidMount(){
    setInterval(() => {
      const now = Date.now();
      this.setState({
        text: now,
        uri: `https://unsplash.it/600/400/?random&${now}`
      });
    }, 1000);
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Image 
          style={{
            width: 101,
            height: 200,
          }}
          resizeMode={"contain"}
          source={{uri:this.state.uri}}
        />
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          {this.state.text}
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Project', () => Project);
