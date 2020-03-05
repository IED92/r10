import AsyncStorage from '@react-native-community/async-storage';

export const createFave = async faveId => {
  try {
    return await AsyncStorage.setItem(
      `${faveId}`,
      JSON.stringify({id: faveId, fave_on: new Date()}),
    );
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const deleteFave = async faveId => {
  return await AsyncStorage.removeItem(`${faveId}`);
};

export const queryFaves = async () => {
  const keys = await AsyncStorage.getAllKeys();
  const allStores = await AsyncStorage.multiGet(keys);
  return allStores.filter(store => store[1].includes('fave_on'));
};
