import React, { Component } from 'react';

import { StyleSheet, View, TextInput, Image, Dimensions, Text, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';

import { SearchBar } from 'react-native-elements';
import Modal from 'react-native-modalbox';


const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;

export default class UserInput extends Component {
    state = {
        search: '',
        isTopOpen: false,
    };

    updateSearch = search => {
        this.setState({ search });
    };

    renderButtons() {
        let children = [];

        for (let i = 0; i < this.props.data.length; i += 2) {
            children.push(
                <View style={styles.containerButton}>
                    <TouchableOpacity style={styles.button}>
                        <Text>{this.props.data[i]}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <Text>{this.props.data[i + 1]}</Text>
                    </TouchableOpacity>
                </View >
            )
        }
        return children.map(value => // parcourir toutes les lignes insérées
            value // represnete une ligne
        )
    }

    render() {
        const { search } = this.state;
        return (
            
                <Modal style={{ backgroundColor: 'white',flex:1, zIndex: 3, paddingTop: '15%', }}
                    ref={"modalTop"}

                    entry='top'
                    position='top'
                    startOpen={this.state.isTopOpen}
                    backdropOpacity={0.2}
                    swipeToClose={false}
                    onOpened={() => { this.setState({ isTopOpen: true }) }}
                    onClosed={() => { this.setState({ isTopOpen: false }) }}
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
                                onChangeText={this.updateSearch}
                                lightTheme={true}
                                round={true}
                                value={search}
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
           

        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"column"
        
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
})