import { useNavigation } from "@react-navigation/native";
import RegisterScreenUI from "./RegisterScreen.ui";

const RegisterScreenContainer = () => {
  const navigation = useNavigation();

  return <RegisterScreenUI navigation={navigation} />;
};

export default RegisterScreenContainer;
