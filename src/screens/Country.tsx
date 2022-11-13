import React from "react";
import { StyleSheet, SafeAreaView, Text, Platform, View, ImageBackground, Image, Alert } from "react-native";
import type {FC} from 'react'
import * as D from '../data'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors } from "react-native-paper";

export type CountryProps = {
    country: D.ICountry
}
const Country: FC<CountryProps> = ({country}) => {
    const {name, capital, population, subregion, region} = country
    return (
        <View style={styles.view}>
            <View>
                <Text style={styles.name}>{name}</Text>
            </View>
            <View>
                <Text>capital: {capital}</Text>
                <Text>population: {population}</Text>
                <Text>subregion: {subregion}</Text>
                <Text>region: {region}</Text>
            </View>
        </View>
    )
}
export default Country
const styles = StyleSheet.create({
    view: {padding: 5},
    name: {fontSize: 30, fontWeight: '400'}
})