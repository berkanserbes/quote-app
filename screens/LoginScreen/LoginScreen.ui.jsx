import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import styles from "./LoginScreen.styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const LoginScreenUI = ({ navigation }) => {
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
            <Text style={styles.title}>Welcome Back</Text>
          </View>
          <View style={styles.authContainer}>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="Email" />
              <TextInput style={styles.input} placeholder="Password" />
            </View>
            <View style={styles.controlContainer}>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </View>
            <View style={styles.authButtonContainer}>
              <TouchableOpacity style={styles.authButton}>
                <Text style={styles.authButtonText}>Sign in</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.signUpNavContainer}>
            <Text>Don't have an account?</Text>
            <Text
              style={styles.signUpText}
              onPress={() => navigation.navigate("Register")}
            >
              Sign up
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreenUI;
