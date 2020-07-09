import React, { useEffect, useReducer, useState } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import Weather from "./Weather";

const API_KEY = "03c55e45313be4e41de3a48392c87841";

const reducer = (state, weather) => {
  return {
    ...state,
    name: weather.name,
    temperature: weather.temperature,
  };
};

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [weather, dispatch] = useReducer(reducer, {
    temperature: null,
    name: null,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        getWeather(position.coords.latitude, position.coords.longitude);
      },
      (error) => {
        setError(error);
      }
    );
  }, []);

  const getWeather = (lat, lon) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        const weather = {
          temperature: data.main.temp,
          name: data.weather[0].main,
        };
        dispatch(weather);
        setIsLoaded(true);
      });
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      {isLoaded ? (
        <Weather weather={weather} />
      ) : (
        <View style={styles.loading}>
          <Text style={styles.loadingText}>Getting the weather</Text>
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
        </View>
      )}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  loading: {
    flex: 1,
    backgroundColor: "#FDF6AA",
    justifyContent: "flex-end",
    paddingRight: 25,
  },
  loadingText: {
    fontSize: 38,
    marginBottom: 24,
  },
  errorText: {
    color: "red",
    marginBottom: 40,
  },
});
