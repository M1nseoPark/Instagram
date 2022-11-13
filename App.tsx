import React, {useEffect, useState, useMemo} from "react";
import type {FC} from 'react'
import { StyleSheet, SafeAreaView, Text, Platform, View, ScrollView, Dimensions, FlatList } from "react-native";
import * as D from './src/data'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors } from "react-native-paper";
import Person from './src/copy/Person'
import color from "color";
import {useClock} from './src/hooks'
import Cache from './src/screens/Cache'
import Memo from './src/screens/Memo'
import Fibo from './src/screens/Fibo'
import PersonUsingValueState from "./src/screens/PersonUsingValueState";
import PersonUsingObjectState from "./src/screens/PersonUsingObjectState";
import PersonUsingPassingState from "./src/screens/PersonUsingPassingState";
import TopBar from "./src/screens/TopBar";

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

type PersonInformation = {
  title: string
  Component: FC<any>
}

const personInformations: PersonInformation[] = [
  {title: 'PersonUsingValueState', Component: PersonUsingValueState},
  {title: 'PersonUsingOjbectState', Component: PersonUsingObjectState},
  {title: 'PersonUsingPassingState', Component: PersonUsingPassingState},
]

const numberOfComponents = personInformations.length

export default function App() {
  const [people, setPeople] = useState<D.IPerson[]>([])
  const children = useMemo(() =>
    personInformations.map(({title, Component}: PersonInformation) => (
      <View style={{flex: 1}} key={title}>
        <Text style={[styles.text]}>{title}</Text>
        <FlatList data={people}
          renderItem={({item}) => <Component person={item} />}
          keyExtractor={(item, index) => item.id}
          ItemSeparatorComponent={() => <View style={styles.itemSeparator} />} />
      </View>)),
  [people.length])

  return (
    <SafeAreaView style={styles.flex}>
      <TopBar setPeople={setPeople}/>
      <ScrollView horizontal 
        contentContainerStyle={[styles.horizontalScrollView]}>
        {children}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  flex: {flex: 1},
  itemSeparator: {borderWidth: 1, borderColor: Colors.grey500},
  horizontalScrollView: {width: width * numberOfComponents},
  text: {fontSize: 24, textAlign: 'center'},
  contentContainerStyle: {width: width * numberOfComponents}
})