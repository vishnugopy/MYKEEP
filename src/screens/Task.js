import React, { useState } from "react";
import {
  SafeAreaView,
  TextInput,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

export default function Task() {
  const [Note, setNote] = useState("");
  const [Title, setTitle] = useState("");

  const style = StyleSheet.create({
    title: {
      height: 50,
      marginHorizontal: 12,
      marginVertical: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius: 15,
      borderColor: "#228CDB",
      backgroundColor: "#fff",
    },
    input: {
      backgroundColor: "#fff",
      height: 150,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius: 15,
    },
    counter: {
      fontSize: 15,
      fontWeight: "bold",
      color: "#228CDB",
      opacity: 0.7,
      marginRight: 12,
      textAlign: "right",
      marginBottom: 50,
    },
    buttonText: {
      fontSize: 15,
      fontWeight: "bold",
      color: "#fff",
    },
    Savebutton: {
      backgroundColor: "#228CDB",
      borderRadius: 15,
      padding: 10,
      marginHorizontal: 12,
      marginVertical: 10,
      justifyContent: "center",
      flexDirection: "row",
      flex: 1,
    },
    button: {
      backgroundColor: "#000",
      borderRadius: 15,
      padding: 10,
      marginHorizontal: 12,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      flex: 1,
    },
  });

  return (
    <View>
      <SafeAreaView>
        <TextInput
          style={style.title}
          onChangeText={(text) => setTitle(text)}
          value={Title}
          placeholder="Here goes the Title"
        />
        <TextInput
          multiline
          style={style.input}
          onChangeText={(text) => setNote(text)}
          value={Note}
          placeholder="Here you can write your note"
          maxLength={2000}
        />
        <Text style={style.counter}> {Note.length} / 2000 Max</Text>

        <TouchableOpacity style={style.Savebutton}>
          <Text style={style.buttonText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button}>
          <Text style={style.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}
