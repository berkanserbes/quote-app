import React from "react";
import { SafeAreaView, View, StyleSheet, Text } from "react-native";

const Login = () => {
  return (
    <SafeAreaView style={styles.outer_container}>
      <View style={styles.container}>
        <Text>Login</Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  outer_container: {},
  container: {},
});
