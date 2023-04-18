import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import LocationBtn from "../component/locationBtn";
import { Zocial } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import useLocation from "../hooks/useLocation";
import { useIsFocused } from "@react-navigation/native";
import { Button } from "@rneui/base";
import MenuTile from "../component/menuTile";
const MainScreen = ({ navigation }) => {
  const [err] = useLocation(useIsFocused);
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
      <MenuTile />
      <View style={{ position: "absolute", bottom: 20, left: 0, right: 0 }}>
        <Button
          title={"Book Now"}
          buttonStyle={{
            borderRadius: 20,
            marginHorizontal: 40,
            marginBottom: 35,
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
