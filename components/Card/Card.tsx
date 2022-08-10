import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Card() {
  return (
    <View style={style.container}>
      <View style={style.details}>
        <Text>De</Text>
      </View>
      <LinearGradient
        style={style.buttons}
        colors={["transparent", "rgba(0,0,0,0.8)"]}
      >
        <Text>De</Text>
      </LinearGradient>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "red",
    height: windowHeight * 0.8,
    width: windowWidth * 0.9,
    borderRadius: 10,
    flexDirection: "column",
    justifyContent: "flex-end",
    overflow: "hidden",
  },
  details: {
    height: windowHeight * 0.12,
    backgroundColor: "green",
  },
  buttons: {
    height: windowHeight * 0.12,
  },
});
