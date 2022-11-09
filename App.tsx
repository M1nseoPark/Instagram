import React, {useEffect, useState} from "react";
import { StyleSheet, SafeAreaView, Text, Platform, View, ScrollView, Dimensions } from "react-native";
import * as D from './src/data'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors } from "react-native-paper";
import Person from './src/copy/Person'
import color from "color";
import {useClock} from './src/hooks'
import Cache from './src/screens/Cache'
import Memo from './src/screens/Memo'
import Fibo from './src/screens/Fibo'

// const people: D.IPerson[] = D.makeArray(10).map(D.createRandomPerson)

// export default function App() {
//   return (
//     <SafeAreaView style={styles.flex}>
//       <FlatList data={people}
//       renderItem={({item}) => <Person person={item} />}
//       keyExtractor={(item, index) => item.id}
//       ItemSeparatorComponent={() => <View style={styles.itemSeparator}/>}/>
//     </SafeAreaView>
//   )
// }

// const styles = StyleSheet.create({
//   flex: {flex: 1},
//   itemSeparator: {borderWidth: 1, borderColor: color(Colors.grey500).lighten(0.3).string()}
// })

const {width} = Dimensions.get('window')
const numberOfComponents = 3

export default function App() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView horizontal contentContainerStyle={[styles.contentContainerStyle]}>
        <Cache/>
        <Memo/>
        <Fibo/>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeAreaView: {flex: 1},
  contentContainerStyle: {width: width * numberOfComponents}
})