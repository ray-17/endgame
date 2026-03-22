import clsx from "clsx"
import { getFarewellText } from "../utils"
import { languages } from "../languages"



export default function Status(props) {
    

    const statusClass = clsx("status", {
        won: props.isWon,
        lost: props.isLost,
        farewell: !props.isOver && props.isLastGuessIncorrect,
    })

    function renderGameStatus(){
        if(!props.isOver && props.isLastGuessIncorrect){
            return <p className="farewell">{getFarewellText(languages[props.wrongGuessesCount - 1].name)}</p>
        }

        if(props.isWon){
            return (
                <>
                        <h2 className="win">You win!</h2>
                        <p className="msg">Well done! 🎉</p>
                    </>
            )
        }
        if(props.isLost){
            return(
                <>
                        <h2 className="lose">Game over!</h2>
                        <p className="msg">You lose! Better start learning Assembly 😭</p>
                    </>
            )
        }
        else{
            return null
        }
    }

    return (
        <section className={statusClass}>
            {renderGameStatus()}
        </section>
    )
}