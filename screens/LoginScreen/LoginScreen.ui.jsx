import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  VirtualizedList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import styles from "./LoginScreen.styles";

const LoginScreenUI = () => {
  return (
    <SafeAreaView style={styles.container}>
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
            <Text style={styles.signUpText}>Sign up</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreenUI;
