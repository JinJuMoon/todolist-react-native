import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

const weatherCases = {
  Rain: {
    colors: ["#00C6FB", "#005BEA"],
    title: "Raining outside",
    subtitle: "Don't forget your umbrella!",
    icon: "ios-rainy",
  },
  Clear: {
    colors: ["#00C6FB", "#005BEA"],
    title: "Sunny with sunshine",
    subtitle: "You may needs sunblock.",
    icon: "ios-sunny",
  },
  ThunderStorm: {
    colors: ["#00ECBC", "#007ADF"],
    title: "ThunderStorm",
    subtitle: "Caution! Caution!",
    icon: "ios-thunderstorm",
  },
  Clouds: {
    colors: ["#D7D2CC", "#304352"],
    title: "Clouds",
    subtitle: "I miss clear sky!",
    icon: "ios-cloudy",
  },
  Snow: {
    colors: ["#7DE2FC", "#B9B6E5"],
    title: "Snow",
    subtitle: "Good to stay home.",
    icon: "ios-snow",
  },
  Drizzle: {
    colors: ["#89F7FE", "#66A6FF"],
    title: "Drizzle",
    subtitle: "Sometimes need umbrella.",
    icon: "ios-rainy-outline",
  },
};

const Weather = ({ weather }) => {
  return (
    <LinearGradient
      colors={weatherCases[weather.name].colors}
      style={styles.container}
    >
      <View style={styles.upper}>
        <Ionicons
          color="white"
          size={144}
          name={weatherCases[weather.name].icon}
        />
        <Text style={styles.temp}>{weather.temperature}</Text>
      </View>
      <View style={styles.lower}>
        <Text style={styles.title}>{weatherCases[weather.name].title}</Text>
        <Text style={styles.subtitle}>
          {weatherCases[weather.name].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
};

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  temp: {
    fontSize: 48,
    backgroundColor: "transparent",
    color: "white",
    marginTop: 10,
  },
  lower: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    marginLeft: 50,
    marginBottom: 90,
  },
  title: {
    fontSize: 48,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 24,
    fontWeight: "300",
  },
  subtitle: {
    fontSize: 24,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 24,
  },
});
