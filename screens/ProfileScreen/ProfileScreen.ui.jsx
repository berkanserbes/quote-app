import { View, Text, Image, TouchableOpacity } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import styles from "./ProfileScreen.styles";

const ProfileScreenUI = ({ handleLogout, userData }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Profile</Text>
        <TouchableOpacity>
          <FontAwesome6 name="edit" size={22} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.profileContainer}>
        <Image
          source={require("../../assets/profile.jpg")}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Berkan Serbes</Text>
      </View>

      <View style={styles.infoContainer}>
        <View styles={styles.infoBorderContainer}>
          <View style={styles.infoStartBorder}>
            <Text>Name: {userData.firstName}</Text>
          </View>
          <View style={styles.infoMidBorder}>
            <Text>Last Name: {userData.lastName}</Text>
          </View>
          <View style={styles.infoMidBorder}>
            <Text>Email: {userData.email}</Text>
          </View>
          <View style={styles.infoEndBorder}>
            <Text>
              Katılma Tarihi:{" "}
              {new Intl.DateTimeFormat("en-US", {
                month: "2-digit",
                day: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              }).format(new Date(userData.createdAt))}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreenUI;

{
  /* <View>
<Text>Profile Screen</Text>
<View>
  <TouchableOpacity onPress={handleLogout}>
    <Text>Logout</Text>
  </TouchableOpacity>
</View>
</View> */
}
