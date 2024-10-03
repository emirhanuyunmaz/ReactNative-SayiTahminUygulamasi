import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Title from '../components/Title'
import CustomButton from '../components/CustomButton'

export default function GameOverScreen({roundsNumber,userNumber,onStartNewGame}) {
  return (
    <View style={styles.container} >
      <Title>Oyun Tamamlandı </Title>
      <View style={styles.imageView}>
        <Image style={styles.image} source={require("../assets/success.jpg")} />
      </View>
      <Text style={styles.result}>
        <Text style={styles.countAndNumber} >{roundsNumber} </Text>
        denemeyle 
        <Text style={styles.countAndNumber}> {userNumber}</Text> sayısını buldun
      </Text>
      <CustomButton onPress={onStartNewGame} >Yeni Oyuna Başla</CustomButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:20,
    alignItems:"center",
    justifyContent:"center",
  },
  imageView:{
    width:350,
    height:350,
    overflow:"hidden",
    borderRadius:"175",
    borderRadius:3,
    borderColor:"red",
    margin:30
  },
  image:{
    width:"100%",
    height:"100%"
  },
  result:{
    color:"white",
    fontSize:20,
    textAlign:"center",
    marginBottom:20
  },
  countAndNumber:{
    color:"red"
  }
})