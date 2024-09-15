import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import styles from "./RegisterScreen.styles";

const RegisterScreenUI = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <ImageBackground
          source={require("../../assets/quote-logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomMainContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Get Started</Text>
          </View>
          <View style={styles.authContainer}>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="Email" />
              <TextInput style={styles.input} placeholder="Password" />
              <TextInput style={styles.input} placeholder="Confirm password" />
            </View>
            <View style={styles.authButtonContainer}>
              <TouchableOpacity style={styles.authButton}>
                <Text style={styles.authButtonText}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.signUpNavContainer}>
            <Text>Already have an account?</Text>
            <Text
              style={styles.signUpText}
              onPress={() => navigation.navigate("Login")}
            >
              Sign in
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RegisterScreenUI;
