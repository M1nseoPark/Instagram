import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, Text, Platform, View, ActivityIndicator, Button, Alert } from "react-native";
import * as D from '../data'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors } from "react-native-paper";
import { useTimeout, useToggle } from "../hooks";

export default function Timer() {
    const [loading, toggleLoading] = useToggle(true)
    useTimeout(() => loading && toggleLoading(), 3000, [loading])

    return (
        <View style={[styles.view]}>
            <Text style={[styles.title]}>Timer</Text>
            <Text>loading: {loading.toString()}</Text>
            <Button onPress={toggleLoading} title={loading ? 'stop loading' : 'start loading'}/>
            {loading && (
                <ActivityIndicator size="large" color={Colors.deepPurple700}/>
            )}
        </View>
    )
}
const styles = StyleSheet.create({
    view: {flex: 1, padding: 5, backgroundColor: Colors.blue300},
    title: {fontSize: 30, fontWeight: '600'}
})