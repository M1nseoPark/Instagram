import React from "react";
import { StyleSheet, SafeAreaView, Text, Platform, View, ImageBackground, Image, Alert } from "react-native";
import * as D from '../data'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors } from "react-native-paper";

const title = 'CopyMe'
export default function CopyMe() {
    return (
        <View style={[styles.view]}>
            <Text style={[styles.text]}>{title}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    view: {padding: 5, backgroundColor: Colors.blue900},
    text: {fontSize: 20, color: 'white'}
})