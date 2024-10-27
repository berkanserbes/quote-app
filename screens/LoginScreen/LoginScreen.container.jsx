import React, { useState } from "react";
import LoginScreenUI from "./LoginScreen.ui";
import { useNavigation } from "@react-navigation/native";
import { useLoginMutation } from "../../redux/services/auth.service";
import {
  validateEmail,
  validatePassword,
} from "../../utils/validations/authValidation";
import Toast from "react-native-toast-message";
import { getToken, saveToken } from "../../utils/helpers/tokenHelper";

const LoginScreenContainer = () => {
  const navigation = useNavigation();
  const [login, { isLoading }] = useLoginMutation();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (name, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    if (!validateEmail(formData.email) || !validatePassword(formData.password))
      return;

    try {
      const result = await login(formData).unwrap();
      console.log(result);
      if (result?.isSuccess === false && result.message) {
        Toast.show({
          type: "error",
          text1: result.message,
          text1Style: {
            fontSize: 15,
            fontWeight: "500",
          },
          position: "bottom",
        });
        return;
      }

      await saveToken(result);
      navigation.replace("Main");
    } catch (error) {
      console.log("catch: ", error);
      alert(error?.data?.message);
    } finally {
      setFormData({
        email: "",
        password: "",
      });
    }
  };

  return (
    <LoginScreenUI
      formData={formData}
      navigation={navigation}
      isLoading={isLoading}
      handleChange={handleChange}
      handleLogin={handleLogin}
    />
  );
};
export default LoginScreenContainer;
