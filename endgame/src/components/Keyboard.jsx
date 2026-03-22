import { clsx } from "clsx"

export default function Keyboard(props) {

    const alphabet = "abcdefghijklmnopqrstuvwxyz"



    function pick(key) {
        props.setGuess(prev =>
            prev.includes(key) ? prev : [...prev, key]
        )
    }

    const keys = alphabet.split('').map((key, index) => {
        const isGuessed = props.guess.includes(key)
        const isCorrect = isGuessed && props.currentWord.includes(key)
        const isWrong = isGuessed && !props.currentWord.includes(key)
        const className = clsx({
            correct: isCorrect,
            wrong: isWrong
        })
        return (
            <button key={index}
                disabled={props.isOver}
                aria-disabled={props.guess.includes(key)}
                aria-label={`Letter ${key}`}
                className={className}
                onClick={() => pick(key)}>{key.toUpperCase()}</button>
        )
    })


    return (
        <section className="keyboard">
            {keys}
        </section>


    )
}