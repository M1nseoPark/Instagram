import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, Text, Platform, View, ImageBackground, Image, Alert, FlatList } from "react-native";
import * as D from '../data'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors } from "react-native-paper";
import Country from "./Country";
import { useAsync } from "../hooks";


export default function Fetch() {
    const [countries, setCountries] = useState<D.ICountry[]>([])
    const [error, resetError] = useAsync(async () => {
        setCountries([])
        resetError()
        // await Promise.reject(new Errror('some error occurs'))
        const countries = await D.getCountries()
        setCountries(countries)
    })

    return (
        <View style={[styles.view]}>
            <Text style={[styles.title]}>Fetch</Text>
            {error && <Text>{error.message}</Text>}
            <FlatList data={countries} showsVerticalScrollIndicator={false}
                renderItem={({item}) => <Country country={item} />}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={() => <View style={styles.separator} />} />
        </View>
    )
}
const styles = StyleSheet.create({
    view: {flex: 1, alignItems: 'center', backgroundColor: Colors.blue100},
    title: {fontSize: 30, fontWeight: '600'},
    separator: {borderBottomColor: Colors.blue50, borderBottomWidth: 1}
})