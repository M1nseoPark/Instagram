import React, {useEffect, useState} from "react";
import { StyleSheet, SafeAreaView, Text, Platform, View, FlatList, Image, Alert } from "react-native";
import * as D from './src/data'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors } from "react-native-paper";
import Person from './src/copy/Person'
import color from "color";
import {useClock} from './src/hooks'

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


export default function App() {
  const time = useClock()

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Text style={[styles.digitFont, styles.time]}>
        {time.toLocaleTimeString()}
      </Text>
      <Text style={styles.digitFont}>{time.toLocaleDateString()}</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeAreaView: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  digitFont: {fontFamily: 'MajorMonoDisplay-Regular', fontWeight: '400'},
  time: {fontSize: 50}
})