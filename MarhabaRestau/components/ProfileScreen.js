// import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable
} from "react-native";
import { faCoffee, faUser, faCircle, faCheck, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'




export default function ProfileScreen({ navigation }) {
    return (
      <View style={styles.container}>
          <Image style={styles.image} source={require("../assets/prof.png")} />
        <View><Text style={styles.title}>Salma DAIOUF </Text></View> 
        <View><Text style={styles.text}>chi tkharbi9aaaaa</Text></View>
        <View>
        <TouchableOpacity style={styles.orderBtn} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.orderText}>Page Principale</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.hoveredBtn} onPress={() => navigation.navigate('Profile')}>
        <Text style={styles.options}onPress={() => navigation.navigate('Dashboard')}>Dashboard</Text> 
        <FontAwesomeIcon icon={ faHome } style={ styles.icon } />
      </TouchableOpacity>
      
      </View>
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   backgroundColor: "black",
    },
    title: {
    color:'#EFD345',
    fontSize: 30,
    alignSelf:'center',
    marginBottom:10
    },
    Buttons:{
        marginLeft:165,
        justifyContent:'flex',
        flexDirection:'row',
        width:"50%",
        marginTop:4
    },
    loginBtn: {
        width: "50%",
        borderRadius: 15,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 40,
        backgroundColor: "#FFEF82",
        marginLeft:8,
      },
      text: {
        color:'black',
        fontSize: 20,
        alignSelf:'center',
        marginBottom:40
        },
        image: {
            marginBottom: 40,
            width:"50%",
            height:"40%",
            alignSelf:'center',
            borderRadius:'100%'
          },
          orderBtn: {
            width: "30%",
            borderRadius: 20,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 40,
            backgroundColor: "#EFD345",
            marginLeft:8,
            alignSelf:'center'
          },
          orderText: {
            fontSize:15,
            fontWeight:'bold' , 
          },
          loginText:{
              fontWeight:'bold',
              color:'black'
          },
          icon:{
            backgroundColor:'#EFD345',
            width:20
          },
          hoveredBtn: {
            position:'absolute',
            width: "15%",
            borderRadius: 100,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#EFD345",
            right:10,
            buttom:1,
            marginTop:50
          },
          options:{
            fontSize:10,
            fontWeight:'bold', 
          }
})