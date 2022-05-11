import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function HomeScreen() {
  const style = StyleSheet.create({
    NoteContainer: {
      padding: 20,
      height: "100%",
    },
    Note: {
      marginVertical: 10,
      backgroundColor: "#fff",
      paddingVertical: 30,
      paddingHorizontal: 10,
      borderRadius: 15,
      borderColor: "#228CDB",
      borderWidth: 1,
    },
    NoteTitle: {
      fontSize: 15,
      fontWeight: "bold",
      opacity: 0.7,
      marginBottom: 10,
    },
    NoteContent: {
      fontSize: 13,
      opacity: 0.7,
      margin: 5,
    },
  });

  return (
    <ScrollView style={style.NoteContainer}>
      <TouchableOpacity style={style.Note}>
        <Text style={style.NoteTitle}> Welcome Home!</Text>
        <Text style={style.NoteContent}>
          piodjfipj fsijsiodj piodjfipj fsijsiodj piodjfipj fsijsiodj piodjfipj
          fsijsiodj piodjfipj fsijsiodj piodjfipj fsijsiodj piodjfipj fsijsiodj
          piodjfipj fsijsiodj piodjfipj fsijsiodj piodjfipj fsijsiodj{" "}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.Note}>
        <Text style={style.NoteTitle}> Welcome Home!</Text>
        <Text style={style.NoteContent}>
          piodjfipj fsijsiodj piodjfipj fsijsiodj piodjfipj fsijsiodj piodjfipj
          fsijsiodj piodjfipj fsijsiodj piodjfipj fsijsiodj piodjfipj fsijsiodj
          piodjfipj fsijsiodj piodjfipj fsijsiodj piodjfipj fsijsiodj{" "}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.Note}>
        <Text style={style.NoteTitle}> Welcome Home!</Text>
        <Text style={style.NoteContent}>
          piodjfipj fsijsiodj piodjfipj fsijsiodj piodjfipj fsijsiodj piodjfipj
          fsijsiodj piodjfipj fsijsiodj piodjfipj fsijsiodj piodjfipj fsijsiodj
          piodjfipj fsijsiodj piodjfipj fsijsiodj piodjfipj fsijsiodj{" "}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.Note}>
        <Text style={style.NoteTitle}> Welcome Home!</Text>
        <Text style={style.NoteContent}>
          piodjfipj fsijsiodj piodjfipj fsijsiodj piodjfipj fsijsiodj piodjfipj
          fsijsiodj piodjfipj fsijsiodj piodjfipj fsijsiodj piodjfipj fsijsiodj
          piodjfipj fsijsiodj piodjfipj fsijsiodj piodjfipj fsijsiodj{" "}
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={style.Note}>
        <Text style={style.NoteTitle}> Welcome Home!</Text>
        <Text style={style.NoteContent}>
          piodjfipj fsijsiodj piodjfipj fsijsiodj piodjfipj fsijsiodj piodjfipj
          fsijsiodj piodjfipj fsijsiodj piodjfipj fsijsiodj piodjfipj fsijsiodj
          piodjfipj fsijsiodj piodjfipj fsijsiodj piodjfipj fsijsiodj{" "}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
