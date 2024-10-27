import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React from "react";
import styles from "./RegisterScreen.styles";

const RegisterScreenUI = ({
  navigation,
  formData,
  handleChange,
  handleRegister,
  isLoading,
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
              <Text style={styles.title}>Get Started</Text>
            </View>
            <View style={styles.authContainer}>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  inputMode="email"
                  placeholder="Email"
                  keyboardType="email-address"
                  onChangeText={(value) => handleChange("email", value)}
                  value={formData.email}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  secureTextEntry
                  onChangeText={(value) => handleChange("password", value)}
                  value={formData.password}
                />
                <TextInput
                  style={styles.input}
                  secureTextEntry
                  placeholder="Confirm password"
                  onChangeText={(value) =>
                    handleChange("confirmPassword", value)
                  }
                  value={formData.confirmPassword}
                />
              </View>
              <View style={styles.authButtonContainer}>
                <TouchableOpacity
                  style={styles.authButton}
                  onPress={handleRegister}
                  disabled={isLoading}
                >
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
      {isLoading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#686D76" />
        </View>
      )}
    </>
  );
};

export default RegisterScreenUI;
