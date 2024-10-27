import { View, Text, Touchable, TouchableOpacity } from "react-native";

const ProfileScreenUI = ({ handleLogout }) => {
  return (
    <View>
      <Text>Profile Screen</Text>
      <View>
        <TouchableOpacity onPress={handleLogout}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreenUI;
