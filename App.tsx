import React, {useEffect, useState, useMemo, useCallback} from "react";
import type {FC} from 'react'
import { StyleSheet, SafeAreaView, Text, Platform, View, ScrollView, Dimensions, FlatList } from "react-native";
import * as D from './src/data'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors } from "react-native-paper";
import Person from './src/copy/Person'
import color from "color";
import {useClock} from './src/hooks'
import TopBar from "./src/screens/TopBar";
import MainNavigator from "./src/copy/MainNavigator";

export default function App() {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <MainNavigator />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  SafeAreaView: {flex: 1},
  topBar: {flexDirection: 'row', flexWrap: 'wrap', padding: 5, justifyContent: 'space-between', backgroundColor: Colors.lightBlue500},
  button: {fontSize: 20, color: 'white'}
})