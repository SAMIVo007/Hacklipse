import React, { useState } from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { db, storage } from '../config/firebase';

export default function ImageUpload() {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const uploadImage = async () => {
    const response = await fetch(image);
    const blob = await response.blob();

    // Upload image to Firebase Storage
    const ref = storage.ref().child(`images/${new Date().toISOString()}`);
    ref.put(blob).then((snapshot) => {
      snapshot.ref.getDownloadURL().then((downloadURL) => {
        setImageUrl(downloadURL);

        // Store image URL in Firestore
        db.collection('images').add({
          imageUrl: downloadURL,
        })
        .then(() => {
          console.log('Image URL stored in Firestore successfully');
        })
        .catch((error) => {
          console.error('Error storing image URL in Firestore: ', error);
        });
      });
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={styles.image} />}
      {image && (
        <Button title="Upload Image" onPress={uploadImage} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});
