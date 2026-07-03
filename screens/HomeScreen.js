import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";

export default function HomeScreen({navigation}) {

  const [destination, setDestination] = useState("");
  const [mode, setMode] = useState("");

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Autonomous Taxi
      </Text>

      <Text style={styles.heading}>
        Select Destination
      </Text>

      <Pressable
        style={[
          styles.button,
          destination === "Bus" && styles.selected
        ]}
        onPress={() => setDestination("Bus")}
      >
        <Text>🚌 Bus Station</Text>
      </Pressable>

      <Pressable
        style={[
          styles.button,
          destination === "Railway" && styles.selected
        ]}
        onPress={() => setDestination("Railway")}
      >
        <Text>🚆 Railway Station</Text>
      </Pressable>

      <Pressable
        style={[
          styles.button,
          destination === "Car Park" && styles.selected
        ]}
        onPress={() => setDestination("Car Park")}
      >
        <Text>🅿️ Car Park</Text>
      </Pressable>

      <Text style={styles.heading}>
        Select Mode
      </Text>

      <Pressable
        style={[styles.button,
          mode === "Manual" && styles.selected
        ]}
        onPress={() => setMode("Manual")}
      >
        <Text>🎮 Manual</Text>
      </Pressable>

      <Pressable
        style={[
          styles.button,
          mode === "Auto" && styles.selected
        ]}
        onPress={() => setMode("Auto")}
      >
        <Text>🤖 Autonomous</Text>
      </Pressable>

    <Pressable
    style={styles.startButton}
    onPress={() => {

        if(mode==="Manual")
        navigation.navigate("Manual");

        else if(mode==="Auto")
        navigation.navigate("Status");

    }}
    >
    <Text style={styles.startText}>
        START
    </Text>
    </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:"#F5F5F5",
    padding:25,
    justifyContent:"center"
  },

  title:{
    fontSize:30,
    fontWeight:"bold",
    textAlign:"center",
    marginBottom:30
  },

  heading:{
    fontSize:20,
    fontWeight:"bold",
    marginTop:15,
    marginBottom:10
  },

  button:{
    backgroundColor:"white",
    padding:15,
    borderRadius:10,
    marginBottom:10,
    borderWidth:1,
    borderColor:"#ccc"
  },

  selected:{
    backgroundColor:"#90CAF9",
    borderColor:"#1565C0"
  },

  startButton:{
    marginTop:30,
    backgroundColor:"#1565C0",
    padding:18,
    borderRadius:12
  },

  startText:{
    color:"white",
    textAlign:"center",
    fontWeight:"bold",
    fontSize:20
  }

});