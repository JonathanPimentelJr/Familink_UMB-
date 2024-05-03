import React, { useState, useEffect } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome'; // For icons
import { imagePaths } from '../assets/Gallery/images.jsx';

// Component to display images in a gallery format with navigation to full-screen view
const Gallery = ({ theme, toggleTheme }) => {
  const navigation = useNavigation();

  // Dynamic column count based on device width
  const [numColumns, setNumColumns] = useState(2); // Default to 2 columns
  const windowWidth = Dimensions.get('window').width;

  useEffect(() => {
    if (windowWidth < 400) {
      setNumColumns(2); // Narrow screen, use 2 columns
    } else {
      setNumColumns(3); // Wider screen, use 3 columns
    }
  }, [windowWidth]);

  const handleImagePress = (imageSource) => {
    // Navigate to the FullScreenImage screen with the clicked image as a parameter
    navigation.navigate('FullScreenImage', { imageSource });
  };

  return (
    <View style={[styles.container, theme === 'dark' ? styles.darkContainer : {}]}>
      <TouchableOpacity onPress={toggleTheme} style={styles.toggleButton}>
        <Icon
          name={theme === 'dark' ? 'sun-o' : 'moon-o'}
          size={24}
          color={theme === 'dark' ? '#fff' : '#000'}
        />
      </TouchableOpacity>

      <FlatList
        data={imagePaths}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleImagePress(item)}>
            <Image
              source={item}
              style={[
                styles.image,
                { width: windowWidth / numColumns - 20 }, // Adjust image width
                theme === 'dark' ? styles.darkImage : {},
              ]}
            />
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
        numColumns={numColumns} // Define the number of columns for the grid
      />
    </View>
  );
};

// Component to display an image in full-screen mode
const FullScreenImage = ({ route }) => {
  const { imageSource } = route.params;

  return (
    <View style={fullScreenStyles.container}>
      <Image
        source={imageSource}
        style={fullScreenStyles.image}
        resizeMode="contain"
      />
    </View>
  );
};

// Navigation stack for the gallery and full-screen image
const Stack = createNativeStackNavigator();

const GalleryNavigator = () => {
  const [theme, setTheme] = useState('light'); // 'light' or 'dark'

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Stack.Navigator initialRouteName="Gallery">
      <Stack.Screen
        name="Gallery"
        component={(props) => <Gallery {...props} theme={theme} toggleTheme={toggleTheme} />}
        options={{ title: 'Gallery' }}
      />
      <Stack.Screen name="FullScreenImage" component={FullScreenImage} options={{ title: 'Full Screen' }} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  image: {
    height: 150,
    margin: 10,
  },
  darkImage: {
    borderColor: '#444',
    borderWidth: 1,
  },
  toggleButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

const fullScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignitems: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default GalleryNavigator;
