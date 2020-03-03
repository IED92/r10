import React from 'react';
import {SafeAreaView, ScrollView, Dimensions} from 'react-native';
import About from './screens/About/About';

class App extends React.Component {
  constructor() {
    super();
    this.state = {screenWidth: '', screenHeight: ''};
  }
  getScreenSize = () => {
    const screenWidth = Math.round(Dimensions.get('window').width);
    const screenHeight = Math.round(Dimensions.get('window').height);
    this.setState({screenWidth: screenWidth, screenHeight: screenHeight});
  };
  render() {
    return (
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          {/* <Header />
          <Text>This is the Front Page</Text> */}
          <About />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default App;
