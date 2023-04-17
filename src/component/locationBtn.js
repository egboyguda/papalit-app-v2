import React from "react";
import { Button } from "@rneui/themed";

const LocationBtn = ({ title, icon, onpress }) => {
  return (
    <Button
      title={title}
      icon={icon}
      type="clear"
      iconLeft
      containerStyle={{ paddingLeft: 0, paddingRight: 0 }}
      onPress={() => {
        onpress();
      }}
    />
  );
};
export default LocationBtn;
