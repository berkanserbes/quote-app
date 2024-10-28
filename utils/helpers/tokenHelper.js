import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveStorageItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log(error.message);
  }
};

export const getStorageItem = async (key) => {
  try {
    const result = await AsyncStorage.getItem(key);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};

export const removeStorageItem = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log(error.message);
  }
};
