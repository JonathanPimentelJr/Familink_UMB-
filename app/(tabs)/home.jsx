import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import { Trending, EmptyState, SearchInput } from '../../components'

const Home = () => {
  return (
    <SafeAreaView className="bg-[#00ab41] h-full">
      <FlatList 
        data={[{id: 1}, {id:2}, {id:3}, ]}
        keyExtractor={(item) => item.id}
        renderItem={({item}) =>  (
          <Text className = "text-3xl text-primary">{item.id}</Text>
        )}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-6" >
              <View>
                <Text className= "font-pmedium text-sm text-white">
                  Welcome Back
                </Text>
              </View>
              <View className= "mt-1.5">
                <Image 
                  source={images.FamilinkLogo} 
                  className="w-[150px] h-[150px]" 
                  resizeMode="contain" 
                />
              </View>  
            </View>

            <SearchInput/>

            <View className = "w-full flex-1 pt-5 pb-8"> 
            <Text className="text-white text-lg font-pregular mb-3"> 
              Latest Posts
            </Text>
            <Trending posts= {[{id: 1}, {id:2}, {id:3}] ?? []} />
            </View>  
          </View>
          
        )}
        ListEmptyComponent={() => (
          <EmptyState 
            title="No Posts for now"
            subtitle="Be the first to post"
          />
        )}
      />
    </SafeAreaView>
  )
}

export default Home