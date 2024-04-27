import { StatusBar } from 'expo-status-bar';
import { Text, ScrollView, View, StyleSheet, Image} from 'react-native';
import {Link} from 'expo-router'
//import * as d3 from "d3";

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#DBC9A3",
  },
  header: {
    textAlign: 'center',
    fontSize: 36,
  },
});

export default function App() {
  return (
    <View style={styles.background}>
      <Text style={styles.header}>Test Header</Text>
      <ScrollView horizontal={true}>
        <ScrollView>
          <Image source={require('../assets/images/cards.png')}/>
          <Link href ="/home" style ={{color: 'blue'}}>Go to Home</Link>
        </ScrollView>
      </ScrollView>
    </View>
  );
}