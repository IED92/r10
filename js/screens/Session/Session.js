import React from 'react';
import {TouchableOpacity, Text, View, Button} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import SpeakerCard from '../../components/SpeakerCard/SpeakerCard';
import CustomButton from '../../components/CustomButtton';

const Session = ({
  session,
  navigation,
  faveIds,
  addFaveSession,
  removeFaveSession,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.faveview}>
        <Text style={styles.location}>{session.location}</Text>
        <Text>
          {faveIds.includes(session.id, 0) ? (
            <MaterialCommunityIcons name="heart" color="#cf392a" />
          ) : null}
        </Text>
      </View>
      <Text style={styles.title}>{session.title}</Text>
      <Text style={styles.time}>
        {moment(session.startTime).format('h:mm A')}
      </Text>
      <Text style={styles.description}>{session.description}</Text>
      <SpeakerCard
        style={styles.card}
        session={session}
        navigation={navigation}
      />
      {!faveIds.includes(session.id) ? (
        <TouchableOpacity
          style={styles.favebutton}
          onPress={() => {
            addFaveSession(session.id);
          }}>
          <CustomButton>
            <Text>Add to Faves</Text>
          </CustomButton>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.favebutton}
          onPress={() => {
            removeFaveSession(session.id);
          }}>
          <CustomButton>
            <Text>Remove from Faves</Text>
          </CustomButton>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Session;
