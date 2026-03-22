


export default function Word({currentWord, guess}) {


    const letters = Array.from(currentWord).map((letter, index) => {
        return (
            <span
                className="letters"
                key={index}
            >
                {guess.includes(letter) ? letter.toUpperCase() : ""}</span>
        )
    });



    return (
        <section className="words">
            {letters}
        </section>
    )
}