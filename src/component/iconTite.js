import React from "react";
import { Image, View, Text } from "react-native";

const IconTile = () => {
  return (
    <View
      style={{
        height: 75,
        width: 75,
        flexDirection: "column",
        alignContent: "center",
        marginHorizontal: 20,
        marginVertical: 20,
      }}
    >
      <Image
        style={{ height: 75, width: 75 }}
        source={require("../../assets/delivery.png")}
      />
      <Text style={{ color: "white", textAlign: "center", fontWeight: "bold" }}>
        Angkas
      </Text>
    </View>
  );
};
export default IconTile;
