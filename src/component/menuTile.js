import React from "react";
import { View, StyleSheet } from "react-native";
import IconTile from "./iconTite";
const MenuTile = () => {
  return (
    <View style={style.container}>
      <IconTile />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    height: "30%",
    marginTop: "10%",
    backgroundColor: "#19376D",
    borderRadius: 20,
    marginHorizontal: 20,
  },
});

export default MenuTile;
