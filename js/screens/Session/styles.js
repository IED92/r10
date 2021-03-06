import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  faveview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  location: {
    color: 'grey',
    fontSize: 18,
  },
  title: {
    fontSize: 30,
    lineHeight: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  time: {
    color: '#cf392a',
    marginBottom: 10,
    fontSize: 18,
  },
  description: {
    fontSize: 18,
    marginBottom: 10,
  },
  presented: {
    color: 'grey',
    fontSize: 18,
  },
  linearGradient: {
    width: 180,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  favebutton: {
    alignSelf: 'center',
    marginTop: 25,
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default styles;
