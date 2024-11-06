import { StyleSheet } from "react-native";
import Wrapper from "@/components/Wrapper";
import { ThemedView } from "@/components/ThemedView";
import { StatusBar } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';

NavigationBar.setBackgroundColorAsync('black');
StatusBar.setBackgroundColor('black');

export default function Page() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.main}>
        <Wrapper/>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 4,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
