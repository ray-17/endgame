import clsx from "clsx";



export default function Word({currentWord, guess, lastGuessedLetter, numGuessesLeft,  isLost, isWon}) {


    const letters = Array.from(currentWord).map((letter, index) => {
        const shouldRevealLetters = isLost || guess.includes(letter)
        const letterClass = clsx("letters",{

            missingLetter: isLost && !guess.includes(letter),
            revealedLetters: isWon
        }
        )
        return (
                <span
                style={{backgroundColor: isWon ? "#10A95B" : "" }}
                className={letterClass}
                key={index}
            >
                {shouldRevealLetters ? letter.toUpperCase() : ""}</span>
        )
    });



    return (
        <>
        <section className="words">
            {letters}
        </section>
        
        <section className="sr-only"
        aria-live="polite"
        role="status">

            <p>
                    {currentWord.includes(lastGuessedLetter) ? 
                        `Correct! The letter ${lastGuessedLetter} is in the word.` : 
                        `Sorry, the letter ${lastGuessedLetter} is not in the word.`
                    }
                    You have {numGuessesLeft} attempts left.
                </p>

            <p>Current word: {currentWord.split("").map(letter => guess.includes(letter) ? letter + "." : "blank.").join(" ")}</p>
        </section>
        
        </>
        
    )
}