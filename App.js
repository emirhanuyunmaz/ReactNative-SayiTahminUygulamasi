import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground} from 'react-native';
import GameStartScreen from './screens/GameStartScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen'

export default function App() {

  const [userNumber,setUserNumber] = useState(null)
  const [gameIsOver,setGameIsOver] = useState(true)
  const [guessCount,setGuessCount] = useState(0)

  function sendedNumberHandler(sendedNumber){
    // console.log(sendedNumber);
    setUserNumber(sendedNumber)
    setGameIsOver(false)
  }

  function gameOverHandler(numberOfGuess){
    setGameIsOver(true)
    setGuessCount(numberOfGuess)
  }

  function startNewGameHandler(){
    setUserNumber(null)
    setGuessCount(0)
  }

  let screen = <GameStartScreen onSendNumber={sendedNumberHandler} />

  if(userNumber){
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  }

  if(gameIsOver && userNumber){
    screen = <GameOverScreen onStartNewGame={startNewGameHandler} roundsNumber={guessCount} userNumber={userNumber} />
  }

  // Linear Gradient ile geçişli bir arka plan rengine sahip olması sağlandı...
  return (
    <LinearGradient  colors={['rgba(0,0,0,0.8)','transparet']} style={styles.container}>
      <ImageBackground style={styles.container} imageStyle={styles.backImage} source={require("./assets/back.jpg")}>
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  backImage:{
    opacity:0.2
  }
});
