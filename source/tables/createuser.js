import React, { useState } from "react"
import { StyleSheet, Text, View, TextInput} from "react-native"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../config/firebase"


export function CreateUser(username,phone,email,password) {

    const userDb = collection(db, "users")
    addDoc(userDb, {
      username: username,
      phone: phone,
      email: email,
      password: password,
    })
}