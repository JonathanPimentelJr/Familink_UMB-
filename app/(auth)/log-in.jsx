import { View, Text, ScrollView,Image, Alert } from 'react-native'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import { Link, router } from 'expo-router'
import { signIn } from '../../lib/appwrite'
import  FormField  from '../../components/FormField'
import CustomButton from '../../components/CustomButton'

const LogIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const submit = async () => {
    if (form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
    }

    setIsSubmitting(true);

    try {
      await signIn(form.email, form.password)
      setUser(result);
      setIsLogged(true);
      
      Alert.alert("Success", "Welcome back!");
      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };



  return (
    <SafeAreaView className="bg-[#00ab41] h-full">
      <ScrollView>
        <View className = "w-full justify-center min-h-[85vh] px-4 " >
          <Image 
            source={images.FamilinkLogo}
            resizeMode='contain' 
            className= "w-[200px] h-[200px]" 
          /> 
          <Text 
            className="text-2xl text-white text-semibold mt-2 font-pmedium">Log in to explore your DNA 
          </Text>

          <FormField 
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({...form, email:e})}
            otherStyles={"mt-7"}
            keyboardType="email-address"
          />

          <FormField 
            title="Password"
            value={form.password}
            handleChangeText={(p) => setForm({...form, password:p})}
            otherStyles={"mt-7"}
          />

          <CustomButton 
            title= "Sign In"
            handlePress= {submit}
            containerStyles="mt-10"
            isLoading = {isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-3">
            <Text 
              className="text-white font-psemibold"> Don't have an account? 
            </Text>
            <Link 
              href="/sign-up" className='text-medium font-psemibold text-primary'>Sign up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default LogIn