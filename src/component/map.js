import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
const Map = () => {
  const [marker, setMarker] = useState(null);
  return (
    <MapView
      style={styles.map}
      onPress={(e) => {
        setMarker(e.nativeEvent.coordinate);
        console.log(marker);
      }}
      initialRegion={{
        latitude: 12.53577,
        longitude: 124.874608,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      {marker ? <Marker coordinate={marker} /> : null}
    </MapView>
  );
};
const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
export default Map;
