import React from "react";
import { View, StyleSheet } from "react-native";
import IconTile from "./iconTite";
const MenuTile = () => {
  return (
    <View style={style.container}>
      <IconTile title={"PAPALIT"} loc={require("../../assets/delivery.png")} />
      <IconTile title={"PAALAYUN"} loc={require("../../assets/paalayun.png")} />
      <IconTile title={"PASAKAY"} loc={require("../../assets/pasakay.png")} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    height: "30%",
    marginTop: "10%",
    backgroundColor: "#BA90C6",
    borderRadius: 20,
    marginHorizontal: 20,
    flexDirection: "row",
  },
});

export default MenuTile;
