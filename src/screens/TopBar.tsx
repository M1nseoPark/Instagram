import React from "react";
import { StyleSheet, SafeAreaView, Text, Platform, View, ImageBackground, Image, Alert } from "react-native";
import * as D from '../data'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors } from "react-native-paper";

const name = D.randomName()
const avatarUrl = D.randomAvatarUrl(name)

export default function TopBar() {
    return (
        <View style={[styles.view]}>
            <Image style={styles.avatar} source={{uri: avatarUrl}}/>
            <View style={styles.centerView}>
                <Text style={[styles.text]}>{name}</Text>
            </View>
            <Icon name="menu" size={24} color="white"/>
        </View>
    )
}
const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5, 
        backgroundColor: Colors.amber500
    },
    text: {fontSize: 20, textAlign: 'center'},
    avatar: {width: 40, height: 40, boarderRadius: 20},
    centerView: {flex: 1}
})