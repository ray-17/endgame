import clsx from "clsx"
import { languages } from "../languages"



export default function Languages(props){

    const languageChips = languages.map((language, index) => {
        
        const styles={
            backgroundColor: language.backgroundColor,
            color: language.color
        }
        const isLost = index < props.wrongGuessesCount
        

        const className = clsx("language-chip", isLost && "lost")

        

        return (
        <span className={className}
         style={styles}
         key={language.name}>
            {language.name}
            </span>
    )
    })
    
   

    return(
        <section className="chips">
        {languageChips}    
        </section>
    )

}