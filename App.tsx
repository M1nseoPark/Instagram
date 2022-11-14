import React, {useEffect, useState, useMemo, useCallback} from "react";
import type {FC} from 'react'
import { StyleSheet, SafeAreaView, Text, Platform, View, ScrollView, Dimensions, FlatList } from "react-native";
import * as D from './src/data'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors, DarkTheme, DefaultTheme } from "react-native-paper";
import Person from './src/copy/Person'
import color from "color";
import {useClock} from './src/hooks'
import TopBar from "./src/screens/TopBar";
import MainNavigator from "./src/copy/MainNavigator";
import {AppearanceProvider, useColorScheme} from 'react-native-appearance'
import {Provider as PaperProvider} from 'react-native-paper'

export default function App() {
  const scheme = useColorScheme()
  const [theme, setTheme] = useState(
    scheme == 'dark' ? DarkTheme : DefaultTheme
  )
  const toggleTheme = useCallback(
    () => setTheme((theme) => (theme.dark ? DefaultTheme : DarkTheme)),
    [])

  return (
    <AppearanceProvider>
      <PaperProvider theme={DarkTheme}>
        <SafeAreaView style={styles.SafeAreaView}>
          <MainNavigator />
        </SafeAreaView>
      </PaperProvider>
    </AppearanceProvider>
  )
}

const styles = StyleSheet.create({
  SafeAreaView: {flex: 1},
  topBar: {flexDirection: 'row', flexWrap: 'wrap', padding: 5, justifyContent: 'space-between', backgroundColor: Colors.lightBlue500},
  button: {fontSize: 20, color: 'white'}
})