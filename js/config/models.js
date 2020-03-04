import AsyncStorage from '@react-native-community/async-storage';

export const createFave = faveId => {
  try {
    return AsyncStorage.setItem(
      `{faveId}`,
      JSON.Stringify({id: faveId, fave_on: new Date()}),
    );
  } catch (e) {
    return false;
  }
};

export const deleteFav = faveId => {
  return AsyncStorage.removeItem('$faveid');
};

export const queryFaves = async () => {
  const keys = await AsyncStorage.getAllKeys();
  const allStores = await AsyncStorage.multiGet(keys);
  return allStores.filter(store => store[1].includes('faved_on'));
};
