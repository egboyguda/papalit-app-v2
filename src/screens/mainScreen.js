import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import LocationBtn from "../component/locationBtn";
import { Zocial } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.locationCtnr}>
        <LocationBtn
          title={"PICKUP N"}
          icon={<Entypo name="location" size={24} color="#F45050" />}
          onpress={() => {
            navigation.navigate("MapScreen");
          }}
        />
        <LocationBtn
          title={"DROP-OFF LOCATION"}
          icon={<Zocial name="dropbox" size={24} color="#A5D7E8" />}
          onpress={() => {
            navigation.navigate("MapScreen");
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B2447", // Replace with your desired color
  },
  locationCtnr: {
    paddingTop: "10%",
    height: "20%",
    backgroundColor: "#19376D",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
});
export default MainScreen;
