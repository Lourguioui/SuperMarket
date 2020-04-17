import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, ImageBackground } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Modal from 'react-native-modalbox';
import { Header } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { LinearGradient } from 'expo-linear-gradient';


// const fetchFonts = () => {
//     return Font.loadAsync({
//       'josefin-sans': require('./assets/fonts/JosefinSans-Bold.ttf'),
//       'josefin-sans-medium': require('./assets/fonts/JosefinSans-Medium.ttf'),
//       'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')

//     });
//   };



export default class HomePage extends React.Component {
    //   const [isTopOpen,setTopOpen] = useState(false)
    // const [dataloaded, setDtataLoaded] = useState(false);
    // if (!dataloaded) {
    //   return (
    //     <AppLoading
    //       startAsync={fetchFonts}
    //       onFinish={() => setDtataLoaded(true)}
    //     />

    //   );
    // }
    state = {
        isTopOpen: false,
    }
    render() {
        return (
            <View style={styles.container}>
                <Header
                    rightComponent={
                        <TouchableOpacity onPress={() => this.refs.modalTop.open()}>
                            <Feather name='search' size={25} color="#222455" />
                        </TouchableOpacity>
                    }
                    centerComponent={
                        <Text style={styles.categoryTitle}>
                            Category
            </Text>
                    }

                    containerStyle={{
                        backgroundColor: "#fff",
                        borderBottomColor: 'transparent',
                        paddingTop: 0,
                        paddingHorizontal: 20,
                        height: 60,
                    }}
                />
                <Modal style={{ backgroundColor: 'white', flex: 1, zIndex: 3, paddingTop: '15%', }}
                    ref={"modalTop"}

                    entry='top'
                    position='top'
                    startOpen={this.state.isTopOpen}
                    backdropOpacity={0.2}
                    swipeToClose={false}
                    onOpened={() => { this.setState({isTopOpen : true}) }}
                    onClosed={() => {this.setState({isTopOpen:false})}}
                >
                    <View style={{ backgroundColor: '#00000000', flex: 1, flexDirection: "column" }}>
                        <View style={styles.closeContainer}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.Title}>
                                    Search
                        </Text>
                            </View>
                            <TouchableOpacity style={styles.closeButton} onPress={() => this.refs.modalTop.close()}>
                                <Text style={{ fontSize: 32, color: "#00000080", textAlign: "center" }}>×</Text>
                            </TouchableOpacity>

                        </View>


                        <View style={{ width: "100%", flex: 12 }}>
                            <SearchBar
                                placeholder="Search"

                                lightTheme={true}
                                round={true}

                                disabled={false}
                                containerStyle={styles.searchBar}
                                inputContainerStyle={styles.inputContainerStyle}
                                inputStyle={{ height: 80 }}
                            />
                        </View>

                        {/* 
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingTop: 20, backgroundColor:"#fff"}}>
                    <View style={styles.containerButton}>
                        <TouchableOpacity style={styles.button}>
                            <Text>Etudiant</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={styles.button}>
                            <Text>Freelanceur</Text>
                        </TouchableOpacity>
                        
                    </View >
                        
                    <View style={styles.containerButton}>
                        <TouchableOpacity style={styles.button}>
                            <Text>Développeur</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={styles.button}>
                            <Text>Employé</Text>
                        </TouchableOpacity>
                        
                    </View >
                    <View style={styles.containerButton}>
                        <TouchableOpacity style={styles.button}>
                            <Text>Designer</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={styles.button}>
                            <Text>Developpeur</Text>
                        </TouchableOpacity>
                        
                    </View >
                        
                </ScrollView> */}




                    </View>

                </Modal>
                <View style={styles.budgetButtonView}>

                    <TouchableOpacity style={styles.budgetButton}>
                        <LinearGradient start={{ x: 0, y: 0.75 }} end={{ x: 1, y: 0.25 }} colors={['#39DC9E', '#00B5B0', '#00B5B0', '#34A6D6']} style={{
                            borderRadius: 10,
                            height: '100%',
                            width: '100%',

                            justifyContent: 'center',

                            alignItems: 'center',

                        }}>
                            <Text style={{ fontSize: 20, color: 'white', fontFamily: 'open-sans-bold', textAlign: 'center' }}>
                                Budget
                 </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                <View style={styles.imageContainer}>
                    <Image source={require('../assets/icons2/banner2.png')} style={styles.banner} />
                </View>
                <ScrollView style={styles.categoryButtonsContainer} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                    <TouchableOpacity style={styles.categoryButton}>
                        <LinearGradient start={{ x: 0, y: 0.75 }} end={{ x: 1, y: 0.25 }} colors={['#FF5673BF', '#FF8C48BF']} style={styles.categoryGradient}>
                            <Text style={styles.categoryText}>FOOD</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryButton}>
                        <LinearGradient start={{ x: 0, y: 0.75 }} end={{ x: 1, y: 0.25 }} colors={['#5C51FFBF', '#FE327EBF']} style={styles.categoryGradient}>
                            <Text style={styles.categoryText}>Healthy food</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryButton}>
                        <LinearGradient start={{ x: 0, y: 0.75 }} end={{ x: 1, y: 0.25 }} colors={['#FF870EBF', '#D236D2BF']} style={styles.categoryGradient}>
                            <Text style={styles.categoryText}>Légimes fruit</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryButton}>
                        <LinearGradient start={{ x: 0, y: 0.75 }} end={{ x: 1, y: 0.25 }} colors={['#009DC5AF', '#21E590AF']} style={styles.categoryGradient}>
                            <Text style={styles.categoryText}>Cosmetique</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryButton}>
                        <LinearGradient start={{ x: 0, y: 0.75 }} end={{ x: 1, y: 0.25 }} colors={['#3B40FEAF', '#2DCEF8AF']} style={styles.categoryGradient}>
                            <Text style={styles.categoryText}>Cosmetique</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            // <View style={styles.container}>
            //   <Text>Open up App.js to start working on your app!</Text>
            // </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#fff',



    },
    headerContainer: {
        flexDirection: "row",
    },
    searchContainer: {
        flex: 1,
        justifyContent: "flex-end",


    },
    categoryTitle: {
        fontSize: 20,
        color: "#222455",
        fontFamily: "josefin-sans-medium"
    },
    budgetButtonView: {

        paddingTop: 0,
        paddingBottom: 0,
        height: 40,


        alignItems: 'flex-end',

    },
    // budgetButtonContainer: {
    //   justifyContent: 'flex-end',
    //   alignContent: 'flex-end',
    //   alignItems: 'center',
    //   height: 50,
    //   width: 60,
    //   backgroundColor: 'blue',


    // },
    budgetButton: {
        flex: 1,
        borderRadius: 10,
        height: 40,
        width: 80,
        bottom: 5,
        right: '10%',

        justifyContent: 'center',
        alignItems: 'center'

    },
    imageContainer: {
        flex: 1,
        // backgroundColor:'red',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingBottom: -40,


    },
    banner: {
        height: '80%',
        width: '80%',
        justifyContent: 'flex-start',
        marginTop: '0%',

    },
    categoryButtonsContainer: {
        flex: 1,
        marginTop: 20,
        width: '90%',
        left: '5%',
        right: '5%',
        borderRadius: 5,
        marginTop: 0,

    },
    categoryButton: {
        height: 65,
        marginBottom: 15,
    },
    image: {
        resizeMode: 'cover',
    },
    categoryGradient: {
        height: '100%',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',

    },
    categoryText: {
        fontSize: 28,
        fontFamily: 'josefin-sans-medium',
        color: 'white'
    },
    searchBar: {
        backgroundColor: '#fff',
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
    },
    inputContainerStyle: {
        borderRadius: 25,
        backgroundColor: "white",
        elevation: 7,
        shadowColor: '#0000000F',
        shadowOpacity: 0.1,
        shadowOffset: { width: 10, height: 20, },
        height: 50,
        shadowRadius: 3
    },
    containerButton: {
        flexDirection: 'column',

        backgroundColor: "#fff"
    },
    backStyle: {
        width: undefined,
        height: undefined,
        alignItems: "center"
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        paddingHorizontal: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        marginLeft: 10,
        marginRight: 10,
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        borderRadius: 15,
        width: 130,
        marginBottom: 20,
        marginTop: 5
    },
    closeButton: {
        backgroundColor: '#fff',
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 0,


        alignSelf: "center",

    },
    closeContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end"

    },
    titleContainer: {
        flex: 10,
        justifyContent: "center",
        alignContent: "center",


    },
    Title: {
        textAlign: "center",
        fontFamily: "Roboto",
        fontSize: 25,
        color: "#0000009F"
    }

});

