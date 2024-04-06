import { collection, addDoc } from "firebase/firestore"
import { db } from "../config/firebase"

export function CreateUser(username,phone,email,password,speciality,fee) {
    const userDb = collection(db, "providers")
    addDoc(userDb, {
      username: username,
      phone: phone,
      email: email,
      password: password,
      speciality: speciality,
      fee: fee,
    })
}