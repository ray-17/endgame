import { useState } from "react"



export default function Word(){

    const [currentWord, setCurrentWord] = useState("react")

    const letters = Array.from(currentWord.toUpperCase()).map((letter, index) => {
        return(
            <span
            className="letters"
            key={index}
            >{letter}</span>
        )
    });



    return(
        <section className="words">
            {letters}
        </section>
    )
}