import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable
} from "react-native";
import { faCoffee, faUser, faCircle, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'


export default function HomeScreen({ navigation }) {
    return (
      <View style={styles.container}>
          <View  style={styles.Buttons}>
              <TouchableOpacity style={styles.loginBtn}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>SignIn</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginBtn}
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.loginText}>SignUp</Text>
          </TouchableOpacity>
          </View>
          <Image style={styles.image} source={require("../assets/logo.jpg")} />
        <View><Text style={styles.title}>𝓜𝓐𝓡𝓗𝓐𝓑𝓐</Text></View> 
        <View><Text style={styles.text}>𝔇𝔬𝔲𝔟𝔩𝔢 𝓬𝓵𝓲𝓬𝓴𝓼 𝔂𝓸𝓾𝓻 𝓭𝓲𝓼𝓱𝓮𝓼 𝓭𝓮𝓵𝓲𝓿𝓮𝓻𝓮𝓭 𝓽𝓸 𝔂𝓸𝓾𝓻 𝓱𝓸𝓶𝓮</Text></View>
        <View>
        <TouchableOpacity style={styles.orderBtn} onPress={() => navigation.navigate('Cards')}>
        <Text style={styles.orderText}>Order Now</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.hoveredBtn} onPress={() => navigation.navigate('Profile')}>
      <FontAwesomeIcon icon={ faUser } style={ styles.icon } />
      </TouchableOpacity>
      </View>
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "black",
    },
    title: {
    color:'#FF8000',
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
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 40,
        backgroundColor: "#FFF",
        marginLeft:8,
      },
      text: {
        color:'#FFF',
        fontSize: 20,
        alignSelf:'center',
        marginBottom:40
        },
        image: {
            marginBottom: 40,
            width:"50%",
            height:"40%",
            alignSelf:'center',
          },
          orderBtn: {
            width: "50%",
            borderRadius: 20,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 40,
            backgroundColor: "#FF8000",
            marginLeft:8,
            alignSelf:'center'
          },
          orderText: {
            fontSize:20,
            fontWeight:'bold' , 
          },
          loginText:{
              fontWeight:'bold',
              color:'black'
          },
          icon:{
            backgroundColor:'#ff8000',
            width:200
          },
          hoveredBtn: {
            position:'absolute',
            width: "15%",
            borderRadius: 100,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#FF8000",
            right:10,
            buttom:1,
            marginTop:50
          },
})