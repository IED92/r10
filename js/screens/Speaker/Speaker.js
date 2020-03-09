import React, {Component} from 'react';
import {Text, View, Image, Linking, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
class Speaker extends Component {
  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.close}
            onPress={() => {
              this.props.navigation.goBack();
            }}>
            <MaterialCommunityIcons name="close" color="white" size={25} />
          </TouchableOpacity>
          <Text style={styles.whttext}>About the Speaker</Text>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.profilepic}
            source={{uri: this.props.speaker.image}}
          />
          <Text style={styles.name}>{this.props.speaker.name}</Text>
          <Text style={styles.bio}>{this.props.speaker.bio}</Text>
          <TouchableOpacity
            style={styles.favebutton}
            onPress={() => {
              Linking.openURL(this.props.speaker.url);
            }}>
            <LinearGradient
              colors={['#9963ea', '#8797D6']}
              start={{x: 0.0, y: 1.0}}
              end={{x: 1.0, y: 0.0}}
              style={styles.linearGradient}>
              <Text style={styles.buttonText}>Read More on Wikipedia</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default Speaker;
