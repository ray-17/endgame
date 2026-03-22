import { useState } from "react";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import Languages from "./components/Languages";
import Status from "./components/Status";
import Word from "./components/Word";
import { languages } from "./languages";
import { getRandomWord } from "./utils";
import Confetti from "react-confetti";




export default function App() {

  const [currentWord, setCurrentWord] = useState(() => getRandomWord())
  const [guess, setGuess] = useState([])

  //derived values/variables/state
  const numGuessesLeft = languages.length - 1

  const wrongGuessesCount = guess.filter(letter => !currentWord.includes(letter)).length

  const isGameWon = currentWord.split("").every(letter => guess.includes(letter))

  const isGameLost = wrongGuessesCount >= numGuessesLeft

  const isGameOver = isGameWon || isGameLost

  const lastGuessedLetter = guess[guess.length - 1]

  const isLastGuessIncorrect = lastGuessedLetter && !currentWord.includes(lastGuessedLetter)


  function newGame(){
    setCurrentWord(getRandomWord)
    setGuess([])
  }



  return (
    <main>
      {isGameWon && isGameOver ? <Confetti/> : ""} 
      <Header />
      <Status
        isWon={isGameWon}
        isLost={isGameLost}
        isOver={isGameOver}
        isLastGuessIncorrect={isLastGuessIncorrect}
        wrongGuessesCount={wrongGuessesCount} />
      <Languages
        wrongGuessesCount={wrongGuessesCount} />
      <Word
        currentWord={currentWord}
        guess={guess}
        lastGuessedLetter={lastGuessedLetter}
        numGuessesLeft={numGuessesLeft} 
        isWon={isGameWon}
        isLost={isGameLost}
        isOver={isGameOver}/>
      <Keyboard
        currentWord={currentWord}
        guess={guess}
        setGuess={setGuess}
        isOver={isGameOver}
      />


      {isGameOver && <button
        onClick={() => newGame()}
        className="newgame">New Game</button>}
    </main>
  )
}