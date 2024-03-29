import { Container, Row, Col } from 'react-bootstrap';
import SingleBook from './SingleBook';
import React, { useContext } from 'react';
import { useState } from 'react';
import { ThemeContext } from "../../context/ThemeContextProvider";


//Creo il component AllBooks e ci passo come param results in modo che faccia partire la serachResult filter di app.jsx
export default function AllBooks ({ results }) {     
    
    //Creo la funzione che fa cambiare tema qui poichè è il main che ha anche il bottone
    //useContext viene utilizzato per accedere al contesto di tema creato precedentemente
    //Restituisce il valore corrente del contesto, che contiene il tema e la funzione per impostarlo
    const { theme } = useContext(ThemeContext);

    //Questa variabile viene utilizzata per impostare la classe CSS del contenitore in base al tema corrente
    const containerTheme = theme === "dark" ? "bg-dark" : "bg-light";

    //Viene utilizzato lo stato locale selected per tener traccia del libro selezionato
    const [selected, setSelected] = useState(null);

    //Questa funzione viene chiamata quando un libro viene selezionato. Prende l'asin del libro selezionato e lo imposta come valore di selected
    const handleSelection = (asin) => {
        setSelected(asin);
    };

    return (
        <>
            <Container className={`${containerTheme}`}>
                    <Row>
                        {/*All'interno di questa colonna viene mappata la lista results dei libri,
                        usando il componente SingleBook per ogni libro. Ogni SingleBook ha un'onSelect prop
                        che viene impostata su handleSelection quando un libro viene selezionato*/}
                        {results.map((book) => (
                            <SingleBook key={book.asin} book={book} onSelect={handleSelection}/>
                        ))}
                    </Row>                       
            </Container>  
        </>
    )
}