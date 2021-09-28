import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import colors from '../styles/colors';
import { Feather } from '@expo/vector-icons';


interface Props extends TouchableOpacityProps {
    title?: string;
}

export function ButtonNext ({title, ...rest}: Props){
    return (
        <TouchableOpacity style={styles.button} activeOpacity={0.7} {...rest}>
            {title ? title : (
                <Feather style={styles.buttonIcon} name="chevron-right" /> 
            )}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 24,
        height: 56,
        width: 56
    },
    buttonIcon: {
        color: colors.white,
        fontSize: 24,
    }
})