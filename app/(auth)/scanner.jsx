import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, Alert, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { router } from 'expo-router'; 
import { CustomButton } from '../../components'; 
import { useGlobalContext } from '../../context/GlobalProvider';
import { icons } from '../../constants';
import ImagePicker from 'expo-image-picker';
import { Gallery } from '../Gallery.jsx'

const Upload = () => {
  const { user } = useGlobalContext();
  const [uploading, setUploading] = useState(false);
  const [form, setForm] = useState({
    title: '',
    image: null,
    prompt: '',
  });

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Sorry, we need camera roll permissions to make this work!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setForm({
        ...form,
        image: result.assets[0],
      });
    }
  };

  const submit = async () => {
    if (form.prompt === '' || form.title === '' || !form.image) {
      return Alert.alert('Please provide all fields');
    }

    setUploading(true);
    try {
      // Assume you have a function to handle video post creation
      await createVideoPost({
        ...form,
        userId: user.$id,
      });

      Alert.alert('Success', 'Post uploaded successfully');
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setForm({
        title: '',
        image: null,
        prompt: '',
      });
      setUploading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.title}>Upload Image</Text>

        <View style={styles.uploadSection}>
          <Text style={styles.label}>Image</Text>
          <TouchableOpacity onPress={pickImage}>
            {form.image ? (
              <Image
                source={{ uri: form.image.uri }}
                resizeMode="cover"
                style={styles.image}
              />
            ) : (
              <View style={styles.uploadPlaceholder}>
                <Image source={icons.upload} resizeMode="contain" style={styles.icon} />
                <Text style={styles.uploadText}>Select an Image</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.buttonsContainer}>
          <CustomButton
            title="Submit"
            handlePress={submit}
            containerStyles="mt-5"
            isLoading={uploading}
          />

          <CustomButton
            title="Gallery"
            handlePress={() => router.push("Gallery")} // Navigate to gallery
            containerStyles="mt-7"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ab41',
  },
  scrollView: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
    marginBottom: 16,
  },
  uploadSection: {
    marginTop: 16,
    alignItems: 'center',
  },
  label: {
    fontSize: 24,
    fontWeight: '500',
    color: 'white',
    marginBottom: 8,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 12,
  },
  uploadPlaceholder: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  icon: {
    width: 50,
    height: 50,
  },
  uploadText: {
    fontSize: 24,
    color: 'white',
  },
  buttonsContainer: {
    marginTop: 34,
    flexDirection: 'column',
  },
  submitButtonContainer: {
    marginBottom: 20,
  },
});

export default Upload;
