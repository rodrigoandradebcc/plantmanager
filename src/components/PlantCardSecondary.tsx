import React from 'react';
import colors from "../styles/colors";
import {Text, StyleSheet, View} from 'react-native';
import fonts from '../styles/fonts';
import {SvgFromUri} from 'react-native-svg'

import {RectButton, RectButtonProps} from 'react-native-gesture-handler';
import { Jost_100Thin_Italic } from '@expo-google-fonts/jost';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface PlantProps extends RectButtonProps{
    data: {
        name: string
        photo: string
        hour: string
    }
}

export const PlantCardSecondary = ({data, ...rest}: PlantProps) => {
    return(
        <RectButton style={styles.container} {...rest}>
            <SvgFromUri uri={data.photo} width={50} height={50}/>
            <Text style={styles.title}>
                {data.name}
            </Text>
            <View style={styles.details}>
                <Text style={styles.timeLabel}>
                    Regar às
                </Text>
                <Text style={styles.time}>
                    {data.hour}
                </Text>
            </View>
        </RectButton>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 25,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.shape,
        marginVertical: 5
    },
    title: {
       flex: Jost_100Thin_Italic,
       marginLeft: 10,
       fontFamily: fonts.heading,
       fontSize: 17,
       color: colors.heading
    },
    details: {
        alignItems: 'flex-end'
    },
    timeLabel: {
        fontSize: 16,
        fontFamily: fonts.text,
        color: colors.body_light 
    },
    time: {
        marginTop: 5,
        fontSize: 16,
        fontFamily: fonts.heading,
        color: colors.body_dark
    }
    
})