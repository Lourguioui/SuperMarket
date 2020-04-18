import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, ImageBackground, Animated } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';



const fetchFonts = () => {
    return Font.loadAsync({
        'josefin-sans': require('../assets/fonts/JosefinSans-Bold.ttf'),
        'josefin-sans-medium': require('../assets/fonts/JosefinSans-Medium.ttf'),
        'open-sans-bold': require('../assets/fonts/OpenSans-Bold.ttf')

    });
};

export default class Card extends React.Component {
    state = {
        dataloaded: false,
        animation : new Animated.Value(0),
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
                        Cart
                    </Text>
                </View>
                <ScrollView style={styles.cardElements}>
                    <TouchableOpacity style={styles.cards} activeOpacity={0.8}>
                        <Image source={require('../assets/icons2/broccoli.png')} style={styles.cardImage} />
                        <Text style={styles.cardText1} >Broccoli</Text>
                        <View style={styles.contentContainer}>
                            <Text style={styles.contentText}>300g</Text>
                            <Text style={styles.contentText1}>DZD300</Text>
                        </View>
                        
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cards} activeOpacity={0.8}>
                        <Image source={require('../assets/icons2/pepper.png')} style={styles.cardImage} />
                        <Text style={styles.cardText1} >Red Pepper</Text>
                        <View style={styles.contentContainer}>
                            <Text style={styles.contentText}>300g</Text>
                            <Text style={styles.contentText1}>DZD300</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cards} activeOpacity={0.8}>
                        <Image source={require('../assets/icons2/strawberry.png')} style={styles.cardImage} />
                        <Text style={styles.cardText1} >Strawberry</Text>
                        <View style={styles.contentContainer}>
                            <Text style={styles.contentText}>300g</Text>
                            <Text style={styles.contentText1}>DZD300</Text>
                        </View>
                        
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
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
        height: '22%',
        backgroundColor: 'white',
        borderBottomEndRadius: 30,
        borderBottomStartRadius: 30,
        elevation: 15
    },
    cardText: {
        color: '#748A9D',
        fontSize: 20,
        fontFamily: 'open-sans-bold',
    },
    cardElements: {
        flex: 1,
        
        width: '90%',
        paddingTop: '10%',
        left: '5%',
        right: '5%',


    },
    cards: {
        flex: 1,
        flexDirection:'row',
        height: 60,
        backgroundColor: '#F0F4F8',
        borderRadius:10,
        alignItems:'center',
        paddingLeft:10,
        paddingRight:10,
        marginBottom : 15
    },
    cardImage:{

    },
    cardText1:{
        paddingLeft:10,
        fontSize:16,
        color:'#748A9D',
    },
    contentText:{
        marginRight:10,
        color : '#A6BCD0',
        fontSize:16,
        
    },
    contentText1:{
        marginRight:10,
        color:'#748A9D',
        fontSize:16,
    },
    contentContainer:{
        flex :1,
        flexDirection:'row',
        justifyContent:'flex-end',
        
    }
})