import { Button } from "@rneui/base";
import React, { useState, useContext } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Context as locationContext } from "../context/locationContext";
import MapViewDirections from "react-native-maps-directions";
const Map = ({ choice }) => {
  const MAP_API_KEY = "AIzaSyDWxUQN7gvXKXuQooujwG7BCcQGKVMGvow"; // Replace with your API key
  const [marker, setMarker] = useState(null);
  const { state, getPickup, getDropOff } = useContext(locationContext);

  const handleMapPress = (e) => {
    setMarker(e.nativeEvent.coordinate);
    console.log(marker);
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={styles.map}
        onPress={handleMapPress}
        initialRegion={{
          latitude: 12.53577,
          longitude: 124.874608,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        {marker ? <Marker coordinate={marker} /> : null}
        {choice === "book" && state.pickup ? (
          <Marker coordinate={state.pickup} />
        ) : null}
        {choice === "book" && state.dropoff ? (
          <Marker coordinate={state.dropoff} />
        ) : null}
        {choice === "book" ? (
          <MapViewDirections
            origin={state.pickup}
            destination={state.dropoff}
            apikey={MAP_API_KEY}
            strokeWidth={10}
            //green line
            strokeColor="green"
            optimizeWaypoints={true}
          />
        ) : null}
      </MapView>
      {marker ? (
        <View style={styles.buttonContainer}>
          <Button
            title={"Submit"}
            buttonStyle={styles.submitButton}
            onPress={() => {
              console.log(marker);
              if (choice === "pickup") {
                getPickup(marker);
              } else if (choice === "dropoff") {
                getDropOff(marker);
              }
            }}
          />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  submitButton: {
    borderRadius: 20,
    paddingHorizontal: 40,
    paddingVertical: 10,
    backgroundColor: "#BA90C6",
  },
});

export default Map;
