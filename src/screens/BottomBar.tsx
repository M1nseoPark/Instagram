import React from "react";
import { StyleSheet, SafeAreaView, Text, Platform, View, ImageBackground, Image, Alert } from "react-native";
import * as D from '../data'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors } from "react-native-paper";

const iconSize = 30, iconColor = 'white'
const icons = ['home', 'table-search', 'account-settings']

export default function BottomBar() {
    const children = icons.map((name) => (
        <Icon key={name} name={name} size={iconSize} color={iconColor}/>
    ))
    return (
        <View style={[styles.view]}>
            {children}
        </View>
    )
}
const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 10, backgroundColor: Colors.blue500},
})