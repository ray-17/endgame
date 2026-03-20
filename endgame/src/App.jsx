import Header from "./components/Header";
import Languages from "./components/Languages";
import Status from "./components/Status";
import { languages } from "./languages";



export default function App(){

  const languageChips = languages.map((language) => {
        return <Languages 
                name={language.name}
                backgroundColor={language.backgroundColor}
                color={language.color}
        />
    })
  
  return(
    <main>
    <Header/>
      {languageChips}
    </main>
  )
}