import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import SearchBar from './components/SearchBar';
import { Header } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { LinearGradient } from 'expo-linear-gradient';

import Modal from 'react-native-modalbox';

const fetchFonts = () => {
  return Font.loadAsync({
    'josefin-sans': require('./assets/fonts/JosefinSans-Bold.ttf'),
    'josefin-sans-medium': require('./assets/fonts/JosefinSans-Medium.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')

  });
};

export default function App() {
  const [dataloaded, setDtataLoaded] = useState(false);
  if (!dataloaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDtataLoaded(true)}
      />

    );
  }
  return (
    <View style={styles.container}>
      <Header
        rightComponent={
          <TouchableOpacity>
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
        }}
      />
      <View style={styles.budgetButtonView}>
        <View style={styles.budgetButtonContainer}>
          <TouchableOpacity style={styles.budgetButton}>
            <LinearGradient start={{ x: 0, y: 0.75 }} end={{ x: 1, y: 0.25 }} colors={['#39DC9E', '#00B5B0', '#00B5B0', '#34A6D6']} styel={{
              flex: 1,
              justifyContent:'center',
              alignContent:'center',
              
              height: 60,
              width: 60
            }}>
              <Text style={{height:'100%',textAlign:'center',alignContent:'center',alignItems:'center'}}>
                Budget
               </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    // </View>
  );
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
    fontSize: 25,
    color: "#222455",
    fontFamily: "josefin-sans-medium"
  },
  budgetButtonView: {

    flexDirection: 'row',
    height: 50,
    backgroundColor: 'red',
    justifyContent: 'flex-end'

  },
  budgetButtonContainer: {
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    height: 50,
    width: 60,
    backgroundColor: 'blue',

  },
  budgetButton: {
    flex: 1,
    justifyContent: 'center',
    height: 50,
    width: 60,
    backgroundColor: 'white',

  },
  gradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: 60
  }
});
