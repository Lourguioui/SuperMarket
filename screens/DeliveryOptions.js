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

export default function DeliveryOptions() {
    const [dataloaded, setDtataLoaded] = useState(false)
    const [standardChecked, setStandardChecked] = useState(false)
    const [sonicChecked, setSonicChecked] = useState(false);
    if (!dataloaded) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => setDtataLoaded(true)}
            />
        );
    }

    const checkStandardSpeed = () => {
        setStandardChecked(!standardChecked)
        if(sonicChecked){
            setSonicChecked(false);
        }
    }
    const checkSonicSpeed = () =>{
        setSonicChecked(!sonicChecked)
        if(standardChecked){
            setStandardChecked(false);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.cardText}>
                    Delivery Options
                    </Text>
                <View style={styles.header}>
                    <View style={styles.headerIconContainer}><Image source={require('../assets/icons2/icon-location-1.png')} /></View>
                    <View style={styles.headerIconContainerSelected}><Image source={require('../assets/icons2/icon-delivery-2.png')} style={styles.headerIcon} /></View>
                    <View style={styles.headerIconContainer}><Image source={require('../assets/icons2/icon-payment.png')} style={styles.headerIcon} /></View>
                    <View style={styles.headerIconContainer}><Image source={require('../assets/icons2/icon-summary.png')} style={styles.headerIcon} /></View>
                </View>
            </View>
            <View style={styles.speedSelectorContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Select Speed</Text>
                </View>
                <View style={styles.speedSelector}>
                    <View style={styles.standard}>
                        <Image source={require('../assets/icons2/icon-delivery-1.png')} />
                        <Text style={styles.speedTypeText}>Standard</Text>
                        <Text style={styles.priceText}>2-3 days (free)</Text>
                        <TouchableOpacity onPress={checkStandardSpeed}>
                            {
                                (standardChecked) ? (<Image source={require('../assets/icons2/checkbox-selected.png')} style={{marginTop:15,marginBottom:15}}/>) : 

                                <Image source={require('../assets/icons2/ellipse.png')} style={{marginTop:15,marginBottom:15,height:25,width:25}}/>
                            }
                        </TouchableOpacity>
                        
                    </View>
                    <View style={styles.sonic}>
                        <Image source={require('../assets/icons2/icon-fast-delivery.png')} />
                        <Text style={styles.speedTypeText} >Supersonic</Text>
                        <Text style={styles.priceText}>Next day (DZD499)</Text>
                        <TouchableOpacity onPress={checkSonicSpeed}>
                        {
                                (sonicChecked) ? (<Image source={require('../assets/icons2/checkbox-selected.png')} style={{marginTop:15,marginBottom:15,height:25,width:25}}/>) : 

                                <Image source={require('../assets/icons2/ellipse.png')} style={{marginTop:15,marginBottom:15, height:25,width:25}}/>
                            }
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
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
        paddingBottom: '8%',
        paddingTop: '10%'
    },
    header: {
        flexDirection: 'row',
        height: 50,
        width: '90%',


    },
    headerIconContainerSelected: {
        flex: 1,
        backgroundColor: '#151F35',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30
    },
    headerIconContainer: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    speedSelectorContainer: {
        flexDirection: 'column',
        height: '30%',
        width: '90%',
        left: '5%',
        right: '5%',
        
        marginTop: 15,
    },
    titleContainer: {
        alignContent: 'center',
        justifyContent: 'center',
       
    },
    title: {
        color: '#748A9D',
        fontSize: 20,
        fontFamily: 'open-sans',
    },
    speedSelector: {
        flexDirection: 'row',
        marginTop: 12,
        
    },
    standard: {

        alignItems: 'center',
        flexDirection: 'column',
        height: '100%',
        width: '45%',
        marginLeft: '2.5%',
        marginRight: '2.5%',
        backgroundColor: '#F0F4F8',
        paddingTop: 10,
        borderRadius : 7
    },
    sonic: {

        alignItems: 'center',
        flexDirection: 'column',
        height: '100%',
        width: '45%',
        marginLeft: '2.5%',
        marginRight: '2.5%',
        backgroundColor: '#F0F4F8',
        paddingTop: 10,
        borderRadius : 7
    },
    speedTypeText:{
        color : '#748A9D',
        fontSize : 16,
        fontFamily : 'open-sans',
        marginTop : 10
    },
    priceText:{
        color :'#A6BCD0',
        fontSize : 16,
        marginTop : 2
    }
})