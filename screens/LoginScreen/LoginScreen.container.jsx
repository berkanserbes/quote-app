import React from "react";
import LoginScreenUI from "./LoginScreen.ui";
import { useNavigation } from "@react-navigation/native";

const LoginScreenContainer = () => {
  const navigation = useNavigation();

  return <LoginScreenUI navigation={navigation} />;
};
export default LoginScreenContainer;
