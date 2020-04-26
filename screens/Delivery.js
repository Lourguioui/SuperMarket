import React from 'react';
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

export default class Delivery extends React.Component {
    state = {
        dataloaded: false,
    }

    render() {
        if (!this.state.dataloaded) {
            return (
                <AppLoading
                    startAsync={fetchFonts}
                    onFinish={() => this.setState({ dataloaded: true })}
                />
            )
        }
        return (
            <View style={styles.container}>
                <View style={styles.card}>
                    <Text style={styles.cardText}>
                        Delivery Address
                    </Text>
                    <View style={styles.header}>
                        <View style={styles.headerIconContainerSelected}><Image source={require('../assets/icons2/icon-location.png')} /></View>
                        <View style={styles.headerIconContainer}><Image source={require('../assets/icons2/icon-delivery.png')} style={styles.headerIcon} /></View>
                        <View style={styles.headerIconContainer}><Image source={require('../assets/icons2/icon-payment.png')} style={styles.headerIcon} /></View>
                        <View style={styles.headerIconContainer}><Image source={require('../assets/icons2/icon-summary.png')} style={styles.headerIcon} /></View>
                    </View>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    card: {
        top: 0,
        justifyContent: 'center',
        alignItems: 'center',
        height: '25%',
        backgroundColor: 'white',
        borderBottomEndRadius: 30,
        borderBottomStartRadius: 30,
        elevation: 15
    },
    cardText: {
        color: '#748A9D',
        fontSize: 20,
        fontFamily: 'open-sans',
        paddingBottom:'8%',
        paddingTop:'10%'
    },
    header: {
        flexDirection: 'row',
        height: 50,
        width:'90%',
      
        
    },
    headerIconContainerSelected: {
        flex: 1,
        backgroundColor: '#151F35',
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:30
    },
    headerIconContainer: {
        flex: 1,
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center'
    },
    headerIcon: {
       
    }

})