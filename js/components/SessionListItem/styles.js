import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  item: {
    borderBottomWidth: 1,
    borderBottomColor: '#e6e6e6',
    paddingLeft: 5,
    paddingVertical: 5,
    height: 70,
    justifyContent: 'center',
  },
  title: {
    color: 'black',
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  location: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#999999',
    paddingRight: 15,
    fontWeight: 'bold',
  },
});

export default styles;
