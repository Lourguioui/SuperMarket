
import * as React from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Card from './screens/Card';
import HomePage from './screens/HomePage';
import DeliveryAdress from './screens/DeliveryAddress';
import DeliveryOptions from './screens/DeliveryOptions';
import PaymentMethod from './screens/PaymentMethod';


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
    <PaymentMethod />
  );
}

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home!</Text>
//     </View>
//   );
// }

// function SettingsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }

// function MyTabBar({ state, descriptors, navigation }) {
//   return (
//     <View style={{ flexDirection: 'row' }}>
//       {state.routes.map((route, index) => {
//         const { options } = descriptors[route.key];
//         const label =
//           options.tabBarLabel !== undefined
//             ? options.tabBarLabel
//             : options.title !== undefined
//               ? options.title
//               : route.name;

//         const isFocused = state.index === index;

//         const onPress = () => {
//           const event = navigation.emit({
//             type: 'tabPress',
//             target: route.key,
//           });

//           if (!isFocused && !event.defaultPrevented) {
//             navigation.navigate(route.name);
//           }
//         };

//         const onLongPress = () => {
//           navigation.emit({
//             type: 'tabLongPress',
//             target: route.key,
//           });
//         };

//         return (
//             <TouchableOpacity
//               accessibilityRole="button"
//               accessibilityStates={isFocused ? ['selected'] : []}
//               accessibilityLabel={options.tabBarAccessibilityLabel}
//               testID={options.tabBarTestID}
//               onPress={onPress}
//               onLongPress={onLongPress}
//               style={{ flex: 1, height: 60,justifyContent:'center',alignItems:'center' }}
//             >
//               <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
//                 {label}
//               </Text>
//             </TouchableOpacity>


//         );
//       })}
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     flexDirection : 'column'
//   }
// })

// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Settings" component={SettingsScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }





// import React from 'react';
// import { useState } from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, ImageBackground } from 'react-native';
// import SearchBar from './components/SearchBar';
// import { Header } from 'react-native-elements';
// import { Ionicons } from '@expo/vector-icons';
// import { Feather } from '@expo/vector-icons';
// import * as Font from 'expo-font';
// import { AppLoading } from 'expo';
// import { LinearGradient } from 'expo-linear-gradient';
// import HomePage from './screens/HomePage';
// import Modal from 'react-native-modalbox';

// const fetchFonts = () => {
//   return Font.loadAsync({
//     'josefin-sans': require('./assets/fonts/JosefinSans-Bold.ttf'),
//     'josefin-sans-medium': require('./assets/fonts/JosefinSans-Medium.ttf'),
//     'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')

//   });
// };

























// export default function App() {
//   const [dataloaded, setDtataLoaded] = useState(false);
//   if (!dataloaded) {
//     return (
//       <AppLoading
//         startAsync={fetchFonts}
//         onFinish={() => setDtataLoaded(true)}
//       />

//     );
//   }
//   return (
//     <HomePage />
//   );
// }


// export default function App() {
//   const [dataloaded, setDtataLoaded] = useState(false);
//   if (!dataloaded) {
//     return (
//       <AppLoading
//         startAsync={fetchFonts}
//         onFinish={() => setDtataLoaded(true)}
//       />

//     );
//   }
//   return (
//     <View style={styles.container}>
//       <Header
//         rightComponent={
//           <TouchableOpacity>
//             <Feather name='search' size={25} color="#222455" />
//           </TouchableOpacity>
//         }
//         centerComponent={
//           <Text style={styles.categoryTitle}>
//             Category
//           </Text>
//         }

//         containerStyle={{
//           backgroundColor: "#fff",
//           borderBottomColor: 'transparent',
//           paddingTop: 0,
//           paddingHorizontal: 20,
//           height: 60,
//         }}
//       />
//       <View style={styles.budgetButtonView}>

//         <TouchableOpacity style={styles.budgetButton}>
//           <LinearGradient start={{ x: 0, y: 0.75 }} end={{ x: 1, y: 0.25 }} colors={['#39DC9E', '#00B5B0', '#00B5B0', '#34A6D6']} style={{
//             borderRadius: 10,
//             height: '100%',
//             width: '100%',

//             justifyContent: 'center',

//             alignItems: 'center',

//           }}>
//             <Text style={{ fontSize: 20, color: 'white', fontFamily: 'open-sans-bold', textAlign: 'center' }}>
//               Budget
//                </Text>
//           </LinearGradient>
//         </TouchableOpacity>
//       </View>
//       <View style={styles.imageContainer}>
//         <Image source={require('./assets/icons2/banner2.png')} style={styles.banner} />
//       </View>
//       <ScrollView style={styles.categoryButtonsContainer} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
//         <TouchableOpacity style={styles.categoryButton}>
//           <LinearGradient start={{ x: 0, y: 0.75 }} end={{ x: 1, y: 0.25 }} colors={['#FF5673BF', '#FF8C48BF']} style={styles.categoryGradient}>
//             <Text style={styles.categoryText}>FOOD</Text>
//           </LinearGradient>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.categoryButton}>
//           <LinearGradient start={{ x: 0, y: 0.75 }} end={{ x: 1, y: 0.25 }} colors={['#5C51FFBF', '#FE327EBF']} style={styles.categoryGradient}>
//             <Text style={styles.categoryText}>Healthy food</Text>
//           </LinearGradient>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.categoryButton}>
//           <LinearGradient start={{ x: 0, y: 0.75 }} end={{ x: 1, y: 0.25 }} colors={['#FF870EBF', '#D236D2BF']} style={styles.categoryGradient}>
//             <Text style={styles.categoryText}>Légimes fruit</Text>
//           </LinearGradient>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.categoryButton}>
//           <LinearGradient start={{ x: 0, y: 0.75 }} end={{ x: 1, y: 0.25 }} colors={['#009DC5AF', '#21E590AF']} style={styles.categoryGradient}>
//             <Text style={styles.categoryText}>Cosmetique</Text>
//           </LinearGradient>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.categoryButton}>
//           <LinearGradient start={{ x: 0, y: 0.75 }} end={{ x: 1, y: 0.25 }} colors={['#3B40FEAF','#2DCEF8AF']} style={styles.categoryGradient}>
//             <Text style={styles.categoryText}>Cosmetique</Text>
//           </LinearGradient>
//         </TouchableOpacity>
//       </ScrollView>
//     </View>
//     // <View style={styles.container}>
//     //   <Text>Open up App.js to start working on your app!</Text>
//     // </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "column",
//     backgroundColor: '#fff',



//   },
//   headerContainer: {
//     flexDirection: "row",
//   },
//   searchContainer: {
//     flex: 1,
//     justifyContent: "flex-end",


//   },
//   categoryTitle: {
//     fontSize: 20,
//     color: "#222455",
//     fontFamily: "josefin-sans-medium"
//   },
//   budgetButtonView: {

//     paddingTop: 0,
//     paddingBottom: 0,
//     height: 40,


//     alignItems: 'flex-end',

//   },
//   // budgetButtonContainer: {
//   //   justifyContent: 'flex-end',
//   //   alignContent: 'flex-end',
//   //   alignItems: 'center',
//   //   height: 50,
//   //   width: 60,
//   //   backgroundColor: 'blue',


//   // },
//   budgetButton: {
//     flex: 1,
//     borderRadius: 10,
//     height: 40,
//     width: 80,
//     bottom: 5,
//     right: '10%',

//     justifyContent: 'center',
//     alignItems: 'center'

//   },
//   imageContainer: {
//     flex: 1,
//     // backgroundColor:'red',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//     paddingBottom: -40,


//   },
//   banner: {
//     height: '80%',
//     width: '80%',
//     justifyContent: 'flex-start',
//     marginTop: '0%',

//   },
//   categoryButtonsContainer: {
//     flex: 1,
//     marginTop: 20,
//     width: '90%',
//     left: '5%',
//     right: '5%',
//     borderRadius: 5,
//     marginTop: 0,

//   },
//   categoryButton: {
//     height: 65,
//     marginBottom: 15,
//   },
//   image: {
//     resizeMode: 'cover',
//   },
//   categoryGradient: {
//     height: '100%',
//     borderRadius: 5,
//     justifyContent: 'center',
//     alignItems: 'center',

//   },
//   categoryText: {
//     fontSize: 28,
//     fontFamily: 'josefin-sans-medium',
//     color: 'white'
//   }

// });
