import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    alignItems: 'center',
    padding: 100,
  },
  container: {
    alignItems: 'center',
    padding: 100,
  },
  card: {
    height: 125,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  presented: {
    color: 'grey',
    fontSize: 18,
  },
  profilepic: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 18,
    marginLeft: 15,
    fontWeight: 'bold',
  },
});

export default styles;
