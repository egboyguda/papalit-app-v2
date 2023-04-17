import { Button } from "@rneui/base";
import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
const Map = () => {
  const [marker, setMarker] = useState(null);
  return (
    <View style={{ flex: 1 }}>
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
      {marker ? (
        <View style={{ position: "absolute", bottom: 20, left: 0, right: 0 }}>
          <Button
            title={"Submit"}
            buttonStyle={{
              borderRadius: 20,
              marginHorizontal: 20,
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
});
export default Map;
