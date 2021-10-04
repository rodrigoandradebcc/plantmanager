import React from 'react';
import { StyleSheet, Text } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface EnvironmentButtonProps extends RectButtonProps{
    title: string;
    active?: boolean;
}

export function EnvironmentButton({title,active = false, ...rest}: EnvironmentButtonProps){
    return (
        <RectButton 
        {...rest} 
        style={[
            styles.container, 
            active && styles.containerActive
        ]}>
                <Text style={[styles.text, active && styles.textActive]}>
                    {title}
                </Text>
        </RectButton>
    ) 
}
const styles = StyleSheet.create({
    text: {
        color: colors.heading,
        fontFamily: fonts.text
    },
    containerActive: {
        backgroundColor: colors.green_light
    },
    textActive: {
        color: colors.green_dark,
        fontFamily: fonts.heading,
    },
    container: {
        backgroundColor: colors.shape,
        height: 40,
        width: 76,
        borderRadius: 12,
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
    }
})