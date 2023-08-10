import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons, Zocial } from "@expo/vector-icons"; // Import suitable icons
import useLocation from "../hooks/useLocation";
import { useIsFocused } from "@react-navigation/native";
import { Button } from "@rneui/base";
import MenuTile from "../component/menuTile";

const MainScreen = ({ navigation }) => {
  const [err] = useLocation(useIsFocused);

  return (
    <View style={styles.container}>
      <View style={styles.locationCtnr}>
        <LocationButton
          title={"PICKUP LOCATION"}
          icon={<MaterialIcons name="location-on" size={24} color="#FFFFFF" />}
          onPress={() => {
            navigation.navigate("MapScreen", { choice: "pickup" });
          }}
          color="#F45050"
        />
        <LocationButton
          title={"DROP-OFF LOCATION"}
          icon={<Zocial name="dropbox" size={24} color="#FFFFFF" />}
          onPress={() => {
            navigation.navigate("MapScreen", { choice: "dropoff" });
          }}
          color="#A5D7E8"
        />
      </View>
      <MenuTile />
      <View style={styles.buttonContainer}>
        <Button
          title={"Book Now"}
          buttonStyle={styles.bookButton}
          onPress={() => {
            navigation.navigate("MapScreen", { choice: "book" });
          }}
        />
      </View>
    </View>
  );
};

const LocationButton = ({ title, icon, onPress, color }) => (
  <TouchableOpacity
    style={[styles.locationButton, { backgroundColor: color }]}
    onPress={onPress}
  >
    {icon}
    <Text style={styles.locationButtonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDF4F5",
  },
  locationCtnr: {
    paddingTop: "10%",
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: "#BA90C6",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  locationButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
    borderRadius: 10,
    paddingVertical: 15,
  },
  locationButtonText: {
    marginLeft: 10,
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  bookButton: {
    borderRadius: 20,
    paddingHorizontal: 40,
    paddingVertical: 10,
    backgroundColor: "#BA90C6",
  },
});

export default MainScreen;
