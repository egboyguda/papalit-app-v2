import React from "react";
import { Button } from "@rneui/themed";

const LocationBtn = ({ title, icon, onpress }) => {
  return (
    <Button
      title={title}
      icon={icon}
      type="clear"
      iconLeft
      titleStyle={{ color: "white" }}
      containerStyle={{ paddingLeft: 0, paddingRight: 0 }}
      onPress={() => {
        onpress();
      }}
    />
  );
};
export default LocationBtn;
