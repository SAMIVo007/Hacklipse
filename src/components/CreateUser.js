import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import ImageUpload from "./Uploadimage";

export default function CreateUser() {
  const [user, setUser] = useState({ username: "", age: "", gender: "" });

  function addUser() {
    const userDb = collection(db, "users");
    addDoc(userDb, {
      username: user.username,
      age: user.age,
      gender: user.gender,
    })
      .then(() => {
        console.log("User added successfully!");
        setUser({ username: "", age: "", gender: "" });
      })
      .catch((error) => {
        console.error("Error adding user:", error);
      });
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={user.username}
        onChangeText={(text) => setUser({ ...user, username: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={user.age}
        onChangeText={(text) => setUser({ ...user, age: text })}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Gender"
        value={user.gender}
        onChangeText={(text) => setUser({ ...user, gender: text })}
      />
      <Pressable style={styles.button} onPress={addUser}>
        <Text style={styles.buttonText}>Create User</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  input: {
    height: 40,
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

