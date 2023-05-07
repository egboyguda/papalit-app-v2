import React from "react";
import { Image, View, Text } from "react-native";

const IconTile = ({ title, loc }) => {
  return (
    <View
      style={{
        height: 75,
        width: 75,
        flexDirection: "column",
        alignContent: "center",
        marginHorizontal: 15,
        marginVertical: 20,
      }}
    >
      <Image style={{ height: 75, width: 75 }} source={loc} />
      <Text style={{ color: "white", textAlign: "center", fontWeight: "bold" }}>
        {title}
      </Text>
    </View>
  );
};
export default IconTile;
