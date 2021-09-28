import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationProps } from '../../App';
import wateringImg from '../assets/watering.png';
import { ButtonNext } from '../components/ButtonNext';
import colors from '../styles/colors';
import fonts from '../styles/fonts'

export function Welcome(){
    const navigation = useNavigation<NavigationProps>();

    function handleStart(){
        navigation.navigate('UserIdentification')
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>
                    Gerencie {'\n'}
                    suas plantas de {'\n'}
                    forma fácil
                </Text>

                <Image source={wateringImg} style={styles.image} resizeMode="contain"/>

                <Text style={styles.subtitle}>
                    Não esqueça mais de regar suas plantas
                    Nós cuidamos de lembrar você sempre que precisar
                </Text>
                <ButtonNext onPress={handleStart} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38,
        fontFamily: fonts.heading,
        lineHeight: 34
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading,
        fontFamily: fonts.text
    },
    image: {
        height: Dimensions.get('window').width * 0.7
    },
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20
    }
})