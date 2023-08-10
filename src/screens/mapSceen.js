import React from "react";
import Map from "../component/map";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

const MapScreen = ({ route }) => {
  const { choice } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <Map choice={choice} />
    </View>
  );
};
export default MapScreen;
