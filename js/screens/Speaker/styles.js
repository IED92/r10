import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    padding: 20,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  whttext: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: '22%',
  },
  card: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 20,
    borderRadius: 10,
    paddingBottom: 20,
  },
  profilepic: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  bio: {
    fontSize: 18,
    lineHeight: 25,
    marginBottom: 20,
  },
  linearGradient: {
    width: 200,
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
