import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Title from '../components/Title'
import ComputerNumber from '../components/ComputerNumber'
import CustomButton from '../components/CustomButton'
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';

let minNumber = 1
let maxNumber = 100

export default function GameScreen({userNumber , onGameOver}) {

  const initialGuess = generateNumber(1,100,userNumber)

  const [currentGuess,setCurrentGuess] = useState(initialGuess)

  const [guessCount,setGuessCount] = useState([initialGuess])

  useEffect(() => {
   if(currentGuess == userNumber){
      onGameOver(guessCount.length)
   } 
  },[currentGuess,userNumber,onGameOver])

  useEffect(() => {
    minNumber = 1
    maxNumber = 100
  },[])

  function generateNumber(min,max,exclude){
    const randomNumber = Math.floor(Math.random()*(max-min))+min
    if(randomNumber === exclude){
      return generateNumber(min,max,exclude)
    }else{
      return randomNumber
    }
  }

  function nextGuesstHandler(direction){

    if((direction === "lower" && currentGuess < userNumber) || (direction === "greater" && currentGuess > userNumber ) ){
      Alert.alert("Yanlış !!","Yanlış olduğunu bile bile basıyorsun",[{text:"Tamam",style:"cancel"}])
      return
    }

    if(direction === "lower"){
      maxNumber= currentGuess
    }else{
      minNumber = currentGuess + 1
    }
    const newRandomNumber = generateNumber(minNumber,maxNumber,currentGuess)
    setCurrentGuess(newRandomNumber)
    setGuessCount((prevGuess) => [newRandomNumber , ...prevGuess])
  }

  return (
    <View style={styles.container} >
      <Title>Bilgisayar Tahmini</Title>
      <ComputerNumber>{currentGuess}</ComputerNumber>
      <View style={styles.card}>
        <Text style={styles.title} >Altında mı Üstünde mi ?</Text>
        <View style={styles.buttonContainer}>
          <CustomButton onPress={nextGuesstHandler.bind(this,"lower")} ><Entypo name="minus" size={24} color="white" /></CustomButton>
          <CustomButton  onPress={nextGuesstHandler.bind(this,"greater")} ><AntDesign name="plus" size={24} color="white" /></CustomButton>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:30,
        color:"white",
    },
    card:{
      backgroundColor:"orange",
      padding:16,
      marginTop:20,
      borderRadius:20,
      alignItems:"center",
      justifyContent:"center"
    },
    title:{
      color:"white",
      fontSize:24,
      marginBottom:15
    },
    buttonContainer:{
      flexDirection:"row",
      
    }
})