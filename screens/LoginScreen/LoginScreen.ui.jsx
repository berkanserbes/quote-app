import React from "react";
import {
  View,
  Text,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import styles from "./LoginScreen.styles";

const LoginScreenUI = ({
  navigation,
  handleLogin,
  isLoading,
  handleChange,
  formData,
}) => {
  return (
    <>
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
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  inputMode="email"
                  keyboardType="email-address"
                  onChangeText={(value) => handleChange("email", value)}
                  value={formData.email}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  secureTextEntry
                  value={formData.password}
                  onChangeText={(value) => handleChange("password", value)}
                />
              </View>
              <View style={styles.controlContainer}>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
              </View>
              <View style={styles.authButtonContainer}>
                <TouchableOpacity
                  style={styles.authButton}
                  onPress={handleLogin}
                >
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
      {isLoading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#686D76" />
        </View>
      )}
    </>
  );
};

export default LoginScreenUI;
