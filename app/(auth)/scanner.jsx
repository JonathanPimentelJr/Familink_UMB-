import React, { useState } from 'react';
import { Button, Image, View, StyleSheet, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Link } from 'expo-router';


const scanner = () => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // Request permission to access media library
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
      return;
    }

    // Open image gallery to pick an image
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, // Restrict to images only
      allowsEditing: true, // Allow image cropping if needed
      aspect: [4, 3], // Aspect ratio for cropping
      quality: 1, // Image quality (1 is the highest)
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri); // Set the selected image URI to the state
    }
  };

  return (
    <View style={styles.container}>
      <Button title="upload" onPress={pickImage} />
      <Link href ="/gallery" style = {{color: '#1fd655'}}> Go to gallery </Link>
      

      {image && (
        <View>
          <Text>Selected Image:</Text>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 150,
    marginTop: 10,
  },
});

export default scanner;