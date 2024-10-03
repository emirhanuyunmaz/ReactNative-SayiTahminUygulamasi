import { Alert, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../components/CustomButton'
import Title from '../components/Title'

export default function GameStartScreen({onSendNumber}) {

    const [enterNumber,setEnterNumber] = useState("")

    function resetHandler (){
        setEnterNumber("")
    } 

    function confirmHandler(){
        const chosenNumber = parseInt(enterNumber)
        if(isNaN(chosenNumber) || chosenNumber<=0 || chosenNumber > 99){
            Alert.alert("Geçersiz Sayı ","Sayı 1 ile 99 arasında olmalı .",[
                {text:"Tamam",style:"destructive",onPress:resetHandler}
            ])
            return;
        }
        onSendNumber(enterNumber)
    }

    function numberHandler(text){        
        setEnterNumber(text)
    }


    return (
    <View style={styles.container} >
      <Title>Sayı Tahmin Uygulaması</Title>
      <View style={styles.card} >
        <TextInput value={enterNumber} onChangeText={numberHandler} maxLength={2} keyboardType='number-pad' style={styles.input} />
        <View style={styles.buttonsContainer} >
            <View style={styles.buttonContainer}  >
                <CustomButton onPress={resetHandler} >Temizle</CustomButton>
            </View>
            <View style={styles.buttonContainer} >
                <CustomButton onPress={confirmHandler} >Onayla </CustomButton>
            </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        padding:20,
    },
    card:{
        backgroundColor:"orange",
        alignItems:"center",
        justifyContent:"center",
        padding:16,
        marginTop:20,
        borderRadius:20,
    },
    input:{
        borderBottomWidth:2,
        borderColor:"yellow",
        width:50,
        height:50,
        marginVertical:10,
        fontSize:35,
        fontWeight:"bold"
    },
    buttonsContainer:{
        flexDirection:"row"
    },

    buttonContainer:{
        flex:1,

    }
})