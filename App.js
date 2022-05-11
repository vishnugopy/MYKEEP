import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/screens/Home";
import Task from "./src/screens/Task";
import { Icon } from "react-native-elements";
import { StyleSheet } from "react-native";

const Stack = createStackNavigator();

export default function App() {
  const style = StyleSheet.create({
    headerIcon: {
      marginRight: 10,
    },
  });


  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerTitleStyle: {
            color: "#000",
          },
          headerTitleAlign: "center",
          headerTintColor: "#228CDB",
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={({ navigation }) => ({
            headerRight: () => (
              <Icon
                name="plus"
                type="feather"
                color="#228CDB"
                style={style.headerIcon}
                onPress={() => navigation.navigate("Task")}
              />
            ),
          })}
        />
        <Stack.Screen name="Task" component={Task} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
