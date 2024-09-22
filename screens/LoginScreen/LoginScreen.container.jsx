import React from "react";
import LoginScreenUI from "./LoginScreen.ui";
import { useNavigation } from "@react-navigation/native";

const LoginScreenContainer = () => {
  const navigation = useNavigation();

  const handleLoginButton = () => {
    navigation.replace("Main");
  };

  return (
    <LoginScreenUI
      navigation={navigation}
      handleLoginButton={handleLoginButton}
    />
  );
};
export default LoginScreenContainer;
