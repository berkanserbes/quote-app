import { removeToken } from "../../utils/helpers/tokenHelper";
import { useNavigation } from "@react-navigation/native";
import ProfileScreenUI from "./ProfileScreen.ui";

const ProfileScreenContainer = () => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    await removeToken("token");

    navigation.replace("Login");
  };

  return <ProfileScreenUI handleLogout={handleLogout} />;
};

export default ProfileScreenContainer;
