import React, {useCallback} from "react";
import type {FC, Dispatch, SetStateAction} from 'react'
import { StyleSheet, SafeAreaView, Text, View, ImageBackground, Image, Alert } from "react-native";
import * as D from '../data'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors } from "react-native-paper";
import { styles } from "./Person.style";
import { IconText } from "../components";

export type PersonIconsProps = {
    person: D.IPerson
    setPerson: Dispatch<SetStateAction<D.IPerson>>
}

// prettier-ignore
const PersonIcons: FC<PersonIconsProps> = ({person, setPerson}) => {
    const commentIconPressed = useCallback(() => setPerson((person) => {
        const {comment} = person.counts
        return {...person, counts: {...person.counts, comment: comment + 1}}
    }), [])

    const retweetIconPressed = useCallback(() => setPerson((person) => {
        const {retweet} = person.counts
        return {...person, counts: {...person.counts, retweet: retweet + 1}}
    }), [])

    const heartIconPressed = useCallback(() => setPerson((person) => {
        const {heart} = person.counts
        return {...person, counts: {...person.counts, heart: heart + 1}}
    }), [])

    return (
        <View style={[styles.countsView]}>
            <IconText viewStyle={[styles.touchableIcon]} onPress={commentIconPressed}
                name="comment" size={24} color={Colors.blue500}
                textStyle={[styles.iconText]} text={person. counts.comment} /> 
            <IconText viewStyle={[styles.touchableIcon]} onPress={retweetIconPressed}
                name="twitter-retweet" size={24} color={Colors.purple500} 
                textStyle={[styles.iconText]} text={person.counts.retweet} />
            <IconText viewStyle={styles.touchableIcon}
                onPress={heartIconPressed} 
                name="heart" size={24} color={Colors.red500}
                textStyle={[styles.iconText]} text={person.counts.heart} />
        </View>
    )
}
export default PersonIcons