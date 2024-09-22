import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "react-native";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import FavoriteScreen from "./screens/FavoritesScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabScreen = () => {
  return (
    <>
      <StatusBar barStyle="default" />
      {/* Durum çubuğu için stil ayarı */}
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="home"
                size={24}
                color={focused ? "#3b65c9" : "gray"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={FavoriteScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="star"
                size={24}
                color={focused ? "#3b65c9" : "gray"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="person"
                size={24}
                color={focused ? "#3b65c9" : "gray"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="settings-sharp"
                size={24}
                color={focused ? "#3b65c9" : "gray"}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

// SafeAreaViewWrapper: SafeAreaView'i edges prop'una göre sarar
const withSafeArea = (Component, edges) => {
  return (props) => (
    <SafeAreaView edges={edges} style={{ flex: 1, backgroundColor: "white" }}>
      <Component {...props} />
    </SafeAreaView>
  );
};

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          {/* Login ve Register ekranları */}
          <Stack.Screen
            name="Login"
            component={withSafeArea(LoginScreen, ["right", "left", "bottom"])}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={withSafeArea(RegisterScreen, [
              "right",
              "left",
              "bottom",
            ])}
            options={{ headerShown: false }}
          />

          {/* Main ekranı ve Tab navigasyonu */}
          <Stack.Screen
            name="Main"
            component={withSafeArea(MainTabScreen, ["right", "left", "top"])}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
