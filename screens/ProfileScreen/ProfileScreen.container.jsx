import {
  getStorageItem,
  removeStorageItem,
} from "../../utils/helpers/tokenHelper";
import { useNavigation } from "@react-navigation/native";
import ProfileScreenUI from "./ProfileScreen.ui";
import { useGetUserByEmailQuery } from "../../redux/services/user.service";
import { Text, View } from "react-native";
import { useEffect, useState } from "react";

async function getUserEmail() {
  try {
    const userEmail = await getStorageItem("userEmail");
    return userEmail;
  } catch (error) {
    console.log(error.message);
  }
}

const ProfileScreenContainer = () => {
  const navigation = useNavigation();
  const [userEmail, setUserEmail] = useState("");

  const { data, error, isLoading } = useGetUserByEmailQuery(userEmail, {
    skip: !userEmail, // userEmail henüz alınmadıysa sorguyu atlama
  });

  useEffect(() => {
    const fetchEmail = async () => {
      const email = await getUserEmail();
      setUserEmail(email);
    };
    fetchEmail();
  }, []);

  const handleLogout = async () => {
    await removeStorageItem("token");
    await removeStorageItem("userEmail");

    navigation.replace("Login");
  };

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }
  console.log(data);

  return <ProfileScreenUI handleLogout={handleLogout} userData={data.data} />;
};

export default ProfileScreenContainer;
