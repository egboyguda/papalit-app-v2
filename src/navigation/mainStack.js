import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MapScreen from "../screens/mapSceen";
import MainScreen from "../screens/mainScreen";
const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainScreen" component={MainScreen}></Stack.Screen>
      <Stack.Screen name="MapScreen" component={MapScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default MainStack;
