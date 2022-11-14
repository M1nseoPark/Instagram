import React, { useCallback, useEffect, useLayoutEffect } from "react";
import { StyleSheet, SafeAreaView, Text, Platform, View, ImageBackground, Image, Alert, LayoutChangeEvent } from "react-native";
import * as D from '../data'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors } from "react-native-paper";
import { useLayout } from "../hooks";

export default function LifeCycle() {
    const [layout, setLayout] = useLayout()
    return (
        <View onLayout={setLayout} style={styles.view}>
            <Text style={styles.title}>LifeCycle</Text>
            <Text>layout: {JSON.stringify(layout, null, 2)}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    view: {flex: 1, alignContent: 'center', backgroundColor: Colors.blue100},
    title: {fontSize: 30, fontWeight: '600'}
})