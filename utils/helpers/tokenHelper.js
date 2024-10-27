import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveToken = async (token) => {
  try {
    await AsyncStorage.setItem("token", token);
  } catch (error) {
    console.log(error.message);
  }
};

export const getToken = async (token) => {
  try {
    const result = await AsyncStorage.getItem(token);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};

export const removeToken = async (token) => {
  try {
    await AsyncStorage.removeItem(token);
  } catch (error) {
    console.log(error.message);
  }
};
