import React from 'react';
import { View, Image, FlatList, StyleSheet } from 'react-native';
import { imagePaths } from '../assets/images_gal/images.jsx'; // Ensure the path is correct

const Gallery = () => (
  <View style={styles.container}>
    <FlatList
      data={imagePaths}
      renderItem={({ item }) => (
        <Image source={item} style={styles.image} /> // Adjust based on how `imagePaths` is defined
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 150,
    marginBottom: 10,
  },
});

export default Gallery;