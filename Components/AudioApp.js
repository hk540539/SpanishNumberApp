import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
import { Audio } from "expo-av";
import Music from "./Music";

import BackgroundColor from "./BackGroundColor";

export default function AudioApp() {
  const playSound = async number => {
    const soundObject = new Audio.Sound();

    try {
      let path = Music[number];
      await soundObject.loadAsync(path); // loads the music in memory
      await soundObject
        .playAsync() // plays the song
        .then(async playbackStatus => {
          setTimeout(() => {
            soundObject.unloadAsync();
          }, playbackStatus.playableDurationMillis);
        }) // remove the load from memory after song length

        .catch(error => {
          console.log(error);
        }); // catch error if not able to play(then catch part)
    } catch (error) {
      // An error occurred!
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.gridContainer}>
        <Image style={styles.logo} source={require("../assets/pp.png")} />
        <View style={styles.rowContainer}>
          <TouchableOpacity
            style={[{ backgroundColor: BackgroundColor["one"] }, styles.item]}
            onPress={() => playSound("one")}
          >
            <Text style={styles.itemText}>One</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[{ backgroundColor: BackgroundColor.two }, styles.item]}
            onPress={() => playSound("two")}
          >
            <Text style={styles.itemText}>Two</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[{ backgroundColor: BackgroundColor.three }, styles.item]}
            onPress={() => playSound("three")}
          >
            <Text style={styles.itemText}>Three</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[{ backgroundColor: BackgroundColor.four }, styles.item]}
            onPress={() => playSound("four")}
          >
            <Text style={styles.itemText}>Four</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[{ backgroundColor: BackgroundColor.five }, styles.item]}
            onPress={() => playSound("five")}
          >
            <Text style={styles.itemText}>Five</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[{ backgroundColor: BackgroundColor.six }, styles.item]}
            onPress={() => playSound("six")}
          >
            <Text style={styles.itemText}>Six</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[{ backgroundColor: BackgroundColor.seven }, styles.item]}
            onPress={() => playSound("seven")}
          >
            <Text style={styles.itemText}>Seven</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[{ backgroundColor: BackgroundColor.eight }, styles.item]}
            onPress={() => playSound("eight")}
          >
            <Text style={styles.itemText}>Eight</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[{ backgroundColor: BackgroundColor.nine }, styles.item]}
            onPress={() => playSound("nine")}
          >
            <Text style={styles.itemText}>Nine</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[{ backgroundColor: BackgroundColor.ten }, styles.item]}
            onPress={() => playSound("ten")}
          >
            <Text style={styles.itemText}>Ten</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  gridContainer: {
    flex: 33.3,
    margin: 5
  },
  logo: {
    alignSelf: "center",
    marginTop: 15
  },
  rowContainer: {
    flexDirection: "row"
  },
  item: {
    flex: 1,
    height: 110,
    alignItems: "center",
    justifyContent: "center",
    margin: 2
  },
  itemText: {
    color: "#FFF",
    fontSize: 20
  }
});
