import AsyncStorage from '@react-native-async-storage/async-storage';

const storeAsyncStorageKey = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {}
};

const getAsyncStorageKey = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return (value !== null && value) || '';
  } catch (e) {}
};

const clearAsyncStorageKey = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {}
};

const clearAllAsyncStorageKeys = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {}
};

export {storeAsyncStorageKey, getAsyncStorageKey, clearAllAsyncStorageKeys, clearAsyncStorageKey};
