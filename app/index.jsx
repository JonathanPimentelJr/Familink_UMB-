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
  man: {
    backgroundColor: "#DBC9A3",
    borderRaidus: 32,
  },
});

export default function App() {
  return (
    <View style={styles.background}>
      <Text style={styles.header}>住障云</Text>
      <ScrollView horizontal={true}>
        <ScrollView>
          <Image  source={require('../assets/images/tree.png')}/>
        </ScrollView>
      </ScrollView>
    </View>
  );
}