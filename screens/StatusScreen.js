import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function StatusScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Robot Status</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#F5F5F5"
  },

  title:{
    fontSize:30,
    fontWeight:"bold"
  }
});