import React from "react";
import { StyleSheet, SafeAreaView, Text, TouchableOpacity, View, FlatList, Image, Alert } from "react-native";
import type {FC, ReactNode, ComponentProps} from 'react'
import type {StyleProp, ViewStyle} from 'react-native'

type TouchableOpacityProps = ComponentProps<typeof TouchableOpacity>

export type TouchableViewProps = TouchableOpacityProps & {
    viewStyle?: StyleProp<ViewStyle>
}

export const TouchableView: FC<TouchableViewProps> = ({
    children, viewStyle, ...touchableProps}) => {
    return (
        <TouchableOpacity {...touchableProps}>
            <View style={[viewStyle]}>{children}</View>
        </TouchableOpacity>
    )
}