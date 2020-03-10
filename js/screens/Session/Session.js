import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';
import styles from './styles';
import SpeakerCard from '../../components/SpeakerCard/SpeakerCard';
import CustomButton from '../../components/CustomButtton';
import textStyles from '../../config/styles';

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
        <Text style={[textStyles, styles.location]}>{session.location}</Text>
        <Text>
          {faveIds.includes(session.id, 0) ? (
            <MaterialCommunityIcons name="heart" size={20} color="#cf392a" />
          ) : null}
        </Text>
      </View>
      <Text style={[textStyles, styles.title]}>{session.title}</Text>
      <Text style={[textStyles, styles.time]}>
        {moment(session.startTime).format('h:mm A')}
      </Text>
      <Text style={[textStyles, styles.description]}>
        {session.description}
      </Text>
      {session.speaker && (
        <Text style={[textStyles, styles.presented]}>Presented By: </Text>
      )}
      {session.speaker ? (
        <SpeakerCard
          style={styles.card}
          session={session}
          navigation={navigation}
        />
      ) : null}
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
