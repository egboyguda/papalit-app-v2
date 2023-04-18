import "react-native-gesture-handler";
import React from "react";
import { setNavigator } from "./src/navigationRes";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainStacks from "./src/navigation/mainStack";
import { Provider as LocationProvider } from "./src/context/locationContext";
const Stack = createStackNavigator();

App = () => {
  return (
    <NavigationContainer
      ref={(navigator) => {
        setNavigator(navigator);
      }}
    >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MainStacks} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return (
    <LocationProvider>
      <App />
    </LocationProvider>
  );
};
