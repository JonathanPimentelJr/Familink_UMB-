import { StatusBar } from 'expo-status-bar';
import {ScrollView, Text, View, Image } from 'react-native';
import {Link} from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images} from '../constants';
import { CustomButton} from "../components";

export default function App() {
  return (
    <SafeAreaView className= " h-full" style={{backgroundColor: '#DFCAA0'}}>
      <ScrollView contentContainerStyle= {{height: '100%'}}>
        
        <View className= "w-full justify-center items-center min-h-[10vh] px-4">
          <Image 
            source={images.FamilinkLogo}
            className="w-[300px] h-[300px]"
          />
          
          <Link href ="/home" style = {{color: '#1fd655'}}> Go to Home </Link>
          
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">Discover your Ancestry with{' '}
            <Text className= "text-primary">Familink</Text>
            </Text>
          
          </View>
          <CustomButton 
            title="Continue with Email"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
          />
          <CustomButton 
            title="Scan your Zup"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
          />
          

          

        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
    
  );
}
