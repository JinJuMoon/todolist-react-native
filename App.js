import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <View style={styles.container}>
      {isLoaded ? null : (
        <View style={styles.loading}>
          <Text style={styles.loadingText}>Getting the weather</Text>
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
    marginBottom: 100,
  },
});
