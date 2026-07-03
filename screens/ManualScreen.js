import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";
import Slider from "@react-native-community/slider";

export default function ManualScreen({ navigation }) {

  const [speed, setSpeed] = useState(50);

  const sendCommand = (command) => {
    console.log(command);
    // MQTT code will go here later
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Manual Control
      </Text>

      {/* Forward */}
      <Pressable
        style={styles.arrow}
        onPress={() => sendCommand("FORWARD")}
      >
        <Text style={styles.arrowText}>↑</Text>
      </Pressable>

      {/* Left Stop Right */}
      <View style={styles.row}>

        <Pressable
          style={styles.arrow}
          onPress={() => sendCommand("LEFT")}
        >
          <Text style={styles.arrowText}>←</Text>
        </Pressable>

        <Pressable
          style={styles.stop}
          onPress={() => sendCommand("STOP")}
        >
          <Text style={styles.stopText}>STOP</Text>
        </Pressable>

        <Pressable
          style={styles.arrow}
          onPress={() => sendCommand("RIGHT")}
        >
          <Text style={styles.arrowText}>→</Text>
        </Pressable>

      </View>

      {/* Backward */}
      <Pressable
        style={styles.arrow}
        onPress={() => sendCommand("BACKWARD")}
      >
        <Text style={styles.arrowText}>↓</Text>
      </Pressable>

      <Text style={styles.speedText}>
        Speed : {speed}%
      </Text>

      <Slider
        style={{width:"100%"}}
        minimumValue={0}
        maximumValue={100}
        value={speed}
        step={5}
        onValueChange={setSpeed}
      />

      <Pressable
        style={styles.home}
        onPress={() => navigation.goBack()}
      >
        <Text style={{color:"white",fontSize:18}}>
          HOME
        </Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    padding:20,
    backgroundColor:"#F5F5F5",
    justifyContent:"center",
    alignItems:"center"
  },

  title:{
    fontSize:30,
    fontWeight:"bold",
    marginBottom:30
  },

  row:{
    flexDirection:"row",
    alignItems:"center",
    marginVertical:20
  },

  arrow:{
    width:80,
    height:80,
    backgroundColor:"#1976D2",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:40,
    margin:10
  },

  arrowText:{
    color:"white",
    fontSize:40
  },

  stop:{
    width:90,
    height:90,
    backgroundColor:"#E53935",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:45,
    margin:10
  },

  stopText:{
    color:"white",
    fontWeight:"bold"
  },

  speedText:{
    marginTop:30,
    fontSize:20,
    fontWeight:"bold"
  },

  home:{
    marginTop:30,
    backgroundColor:"#424242",
    padding:15,
    borderRadius:10
  }

});