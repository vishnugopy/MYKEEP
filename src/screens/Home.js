import React from "react";
import { Text, View, StyleSheet , ScrollView } from "react-native";

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
    },
    NoteTitle: {
      fontSize: 15,
      fontWeight: "bold",
      color: "#228CDB",
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
      <View style={style.Note}>
        <Text style={style.NoteTitle}> Welcome Home!</Text>
        <Text style={style.NoteContent}>
          piodjfipj fsijsiodj piodjfipj fsijsiodj piodjfipj fsijsiodj piodjfipj
          fsijsiodj piodjfipj fsijsiodj piodjfipj fsijsiodj piodjfipj fsijsiodj
          piodjfipj fsijsiodj piodjfipj fsijsiodj piodjfipj fsijsiodj{" "}
        </Text>
      </View>

      <View style={style.Note}>
        <Text style={style.NoteTitle}> Welcome Home!</Text>
        <Text style={style.NoteContent}>
          piodjfipj fsijsiodj piodjfipj fsijsiodj piodjfipj fsijsiodj piodjfipj
          fsijsiodj piodjfipj fsijsiodj piodjfipj fsijsiodj piodjfipj fsijsiodj
          piodjfipj fsijsiodj piodjfipj fsijsiodj piodjfipj fsijsiodj{" "}
        </Text>
      </View>

      <View style={style.Note}>
        <Text style={style.NoteTitle}> Welcome Home!</Text>
        <Text style={style.NoteContent}>
          piodjfipj fsijsiodj piodjfipj fsijsiodj piodjfipj fsijsiodj piodjfipj
          fsijsiodj piodjfipj fsijsiodj piodjfipj fsijsiodj piodjfipj fsijsiodj
          piodjfipj fsijsiodj piodjfipj fsijsiodj piodjfipj fsijsiodj{" "}
        </Text>
      </View>

      <View style={style.Note}>
        <Text style={style.NoteTitle}> Welcome Home!</Text>
        <Text style={style.NoteContent}>
          piodjfipj fsijsiodj piodjfipj fsijsiodj piodjfipj fsijsiodj piodjfipj
          fsijsiodj piodjfipj fsijsiodj piodjfipj fsijsiodj piodjfipj fsijsiodj
          piodjfipj fsijsiodj piodjfipj fsijsiodj piodjfipj fsijsiodj{" "}
        </Text>
      </View>
    </ScrollView>
  );
}
