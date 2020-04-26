import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, ImageBackground, Animated } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const fetchFonts = () => {
    return Font.loadAsync({
        'josefin-sans': require('../assets/fonts/JosefinSans-Bold.ttf'),
        'josefin-sans-medium': require('../assets/fonts/JosefinSans-Medium.ttf'),
        'open-sans-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
        'open-sans': require('../assets/fonts/OpenSans-Regular.ttf')

    });
};

export default function PaymentMethod(){
    const [dataloaded, setDtataLoaded] = useState(false)

    if (!dataloaded) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => setDtataLoaded(true)}
            />
        );
    }
}