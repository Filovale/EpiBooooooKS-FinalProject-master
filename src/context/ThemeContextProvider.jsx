import { createContext } from "react";
import { useState, useEffect } from "react";


//Viene creato un contesto di tema utilizzando la funzione createContext
//Questo contesto verrà utilizzato per passare il tema ai componenti figli
export const ThemeContext = createContext(null);

//Viene definito un componente React chiamato ThemeContextProvider che funge da provider del contesto di tema
//Prende un componente children come prop, che rappresenta i componenti figli che saranno avvolti dal provider del contesto
export default function ThemeContextProvider ( {children} ) {

    //Viene utilizzato useState per definire uno stato theme con valore iniziale su localStorge. Questo significa che viene
    //recuperato il tema salvato in localStorage, e se non c'è alcun valore memorizzato, viene utilizzato il tema predefinito "light". 
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    
    //Per salvare il tema corrente in localStorage ogni volta che il valore di theme cambia.
    //Il tema selezionato viene memorizzato localmente e persiste anche dopo il ricaricamento della pagina.
    useEffect(() => {localStorage.setItem("theme", theme);}, [theme]);

     //Viene creato un oggetto value che contiene lo stato del tema e la funzione per impostarlo.
    const value = {
        theme,
        setTheme
    };

    //Il contesto di tema viene reso disponibile a tutti i componenti figli. Il valore del contesto viene passato come prop value
    //Infine, i componenti figli possono accedere al tema utilizzando useContext
    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>        
    )
}