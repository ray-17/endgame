import { languages } from "../languages"


export default function Languages(){

    const languageChips = languages.map((language) => {
        const styles={
            backgroundColor: language.backgroundColor,
            color: language.color
        }
        return (
        <span
         style={styles}
         key={language.name}>
            {language.name}</span>
    )
    })
    
   

    return(
        <section className="chips">
        {languageChips}    
        </section>
    )

}