import React, { useCallback, useEffect, useLayoutEffect } from "react";
import { StyleSheet, SafeAreaView, Text, Platform, View, ImageBackground, Image, Alert, LayoutChangeEvent } from "react-native";
import * as D from '../data'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors } from "react-native-paper";

export default function LifeCycle() {
    useEffect(() => {
        console.log(Platform.OS, 'useEffect called')
        return () => console.log(Platform.OS, 'useEffect finished')
    }, [])
    useLayoutEffect(() => {
        console.log(Platform.OS, 'useLayoutEffect called')
        return () => console.log(Platform.OS, 'useLayoutEffect finished')
    }, [])
    const onLayout = useCallback((e: LayoutChangeEvent) => {
        const {layout} = e.nativeEvent
        console.log(Platform.OS, 'onLayout called', layout)
    }, [])
    console.log(Platform.OS, 'render start')
    return (
        <View onLayout={onLayout} style={[styles.view]}>
            <Text style={[styles.title]}>LifeCycle</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    view: {flex: 1, padding: 5, backgroundColor: Colors.blue100},
    title: {fontSize: 30, fontWeight: '600'}
})