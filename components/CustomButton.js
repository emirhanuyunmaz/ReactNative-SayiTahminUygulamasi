import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CustomButton({children,onPress}) {
  return (
    <View style={styles.buttonContainer} >
        <Pressable onPress={onPress} style={({pressed}) => pressed ? [styles.buttonInnerContainer,styles.pressed]:styles.buttonInnerContainer} >
            <Text style={styles.buttonText} >{children}</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({

    buttonContainer:{
        margin:5
    },

    buttonInnerContainer:{
        paddingVertical:8,
    },

    buttonText:{
        alignItems:"center",
        color:"white",
        fontSize:20,
    },

    pressed:{
        opacity:0.5
    }

})