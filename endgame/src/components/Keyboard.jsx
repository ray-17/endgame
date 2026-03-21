import { useState } from "react"


export default function Keyboard() {

    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    const [guess, setGuess] = useState([])

    function pick(key) {
        setGuess(prev =>
            prev.includes(key) ? prev : [...prev, key]
        )
    }

    const keys = alphabet.split('').map((key, index) => {
        return (
            <button key={index}
                className="keys"
                onClick={() => pick(key)}>{key.toUpperCase()}</button>
        )
    })

    console.log(guess)

    return (
        <section className="keyboard">
            {keys}
        </section>


    )
}