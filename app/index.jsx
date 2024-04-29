import { StatusBar } from 'expo-status-bar';
import {ScrollView, Text, View, Image, ImageBackground } from 'react-native';
import {Link, Redirect, router} from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images} from '../constants';
import { CustomButton} from "../components";
import { useGlobalContext } from "../context/GlobalProvider";

export default function App() {
  const {isLoading, isLogged} = useGlobalContext();

  if (!isLoading && isLogged) return <Redirect href ="/home" />

  return (
    <SafeAreaView className= " h-full" style={{backgroundColor: '#00ab41'}}>
      <ScrollView contentContainerStyle= {{height: '100%'}}>
        
        <View className= "w-full justify-center items-center min-h-[85vh] px-4">
          <Image 
            source={images.FamilinkLogo}
            className="w-[360px] h-[300px]"
          />
          
          
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">Discover your Ancestry with{' '}
            <Text className= "text-primary">Familink</Text>
            </Text>
          
          </View>
          <CustomButton 
            title="Explore your DNA"
            handlePress={() => router.push("/log-in")}
            containerStyles="w-full mt-7"
          />
          <CustomButton 
            title="Unlock your Zup"
            handlePress={() => router.push("/scanner")}
            containerStyles="w-full mt-7"
          />
          <CustomButton 
            title="Build your Family Tree"
            handlePress={() => router.push("/family-tree")}
            containerStyles="w-full mt-7"
          />
          

        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
    
  );
}
