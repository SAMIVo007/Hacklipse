import React from "react"
import { Text, View, Pressable } from "react-native"
import { deleteDoc, doc } from "firebase/firestore"
import { db } from "../config/firebase"

export default function DeleteProvider({ id }) {
  function deleteProvider() {
    const user = doc(db, "providers", id)
    deleteDoc(user)
  }

  return (
    <View>
      <Pressable onPress={deleteProvider}>
        <Text>delete</Text>
      </Pressable>
    </View>
  )
}