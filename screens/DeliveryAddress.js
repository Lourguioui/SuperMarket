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

export default class DeliveryAdress extends React.Component {
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
                <View style={styles.accountContainer}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.accountText}>Anis Bouguerra</Text>
                    </View>
                    <View style={{ alignItems: 'flex-end', flex: 1 }}>
                        <Image source={require('../assets/icons2/checkbox-selected-1.png')} style={{ alignItems: 'flex-end', alignContent: 'flex-end', right: 20 }} />
                    </View>
                </View>
                <View style={styles.Container}>
                    <Text style={{ color: '#748A9D', fontFamily: 'open-sans', marginLeft: 20 }}>LDN 4OW</Text>
                </View>
                <View style={styles.scrollViewStyle} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                    <View style={{ marginTop: 15 }}><Text style={{ color: '#A6BCD0', fontFamily: 'open-sans', marginLeft: 25 }}>1 Wallabe Way, Setif, dz…</Text></View>
                    <View style={{ marginTop: 15 }}><Text style={{ color: '#A6BCD0', fontFamily: 'open-sans', marginLeft: 25 }}>2 Wallabe Way, Setif, dz…</Text></View>
                    <View style={{ marginTop: 15 }}><Text style={{ color: '#A6BCD0', fontFamily: 'open-sans', marginLeft: 25 }}>3 Wallabe Way, Setif, dz…</Text></View>
                    <View style={{ marginTop: 15 }}><Text style={{ color: '#A6BCD0', fontFamily: 'open-sans', marginLeft: 25 }}>4 Wallabe Way, Setif, dz…</Text></View>
                    <View style={{ marginTop: 15 }}><Text style={{ color: '#A6BCD0', fontFamily: 'open-sans', marginLeft: 25 }}>5 Wallabe Way, Setif, dz…</Text></View>
                </View>
                
                <View style={styles.streetAddress}>
                    <View style={{
                        flex: 1,
                        justifyContent : 'center'
                    }} >
                        <Text style={{ marginLeft: 25, color: '#A6BCD0', }} >Street Address</Text>
                    </View>
                    <View style={{ alignItems: 'flex-end', flex: 1, justifyContent:'center' }}>
                        <Image source={require('../assets/icons2/checkbox-selected.png')} style={{ alignItems: 'flex-end', alignContent: 'flex-end', right: 20 }} />
                    </View>
                </View>
                
                <TouchableOpacity style={styles.mainButton} activeOpacity={0.8}>
                    <Text style={{color:'#fff',fontSize:14,fontFamily:'open-sans-bold'}}> > CONTINUE </Text>
                </TouchableOpacity>

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
    accountContainer: {
        marginTop: 15,
        flexDirection: 'row',
        height: 50,
        backgroundColor: '#F0F4F8',
        width: '90%',
        marginLeft: '5%',
        marginRight: '5%',
        borderRadius: 5,
        alignItems: 'center'
    },
    accountText: {
        color: '#748A9D',
        fontSize: 16,
        left: 20
    },
    Container: {
        marginTop: 15,
        flexDirection: 'row',
        height: 50,
        backgroundColor: '#F0F4F8',
        width: '90%',
        marginLeft: '5%',
        marginRight: '5%',
        borderTopRightRadius: 6,
        borderTopLeftRadius: 6,
        alignItems: 'center'
    },
    scrollViewStyle: {
        width: '90%',
        marginTop: 5,
        backgroundColor: '#F0F4F8',
        marginLeft: '5%',
        paddingBottom: 10,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
    },
    streetAddress: {
        height: 50,
        backgroundColor: '#F0F4F8',
        justifyContent: 'center',
        width: '90%',
        marginTop: 10,
        flexDirection:'row',
        marginRight : '5%',
        marginLeft : '5%',
    },
    mainButton:{
        backgroundColor:'#EC8A18',
        height :55,
        width: '90%',
        left:'5%',
        right:'5%',
        borderRadius:30,
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
       marginTop: 10
    }


})