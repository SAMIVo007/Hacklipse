import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase";

export default function CreateProvider() {
  const [user, setUser] = useState({ username: "", age: "", gender: "", fee: "", Speciality: ""});

  function addProvider() {
    const userDb = collection(db, "providers");
    addDoc(userDb, {
      username: user.username,
      age: user.age,
      gender: user.gender,
      fee: user.fee,
      Speciality: user.Speciality,
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
        <TextInput
        style={styles.input}
        placeholder="Speciality"
        value={user.Speciality}
        onChangeText={(text) => setUser({ ...user, Speciality: text })}
      />
        <TextInput
        style={styles.input}
        placeholder="fee"
        value={user.fee}
        onChangeText={(text) => setUser({ ...user, fee: text })}
      />
      <Pressable style={styles.button} onPress={addProvider}>
        <Text style={styles.buttonText}>Create Provider</Text>
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
