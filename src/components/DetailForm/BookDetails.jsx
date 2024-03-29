import jsonData from '../../data/horror.json';
import DetailForm from './DetailForm.jsx';
import CommentArea from '../Main/CommentArea/CommentArea.jsx';
import MyNav from '../MyNav/MyNav.jsx';
import Footer from '../Footer/Footer.jsx';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import './BookDetails.css';

export default function BookDetails () {

    // State per gestire la visualizzazione dell'area commenti. Inizializzato a false, indicando che l'area commenti non è visibile all'avvio.
    const [viewComment, setViewComment] = useState(false);

    // Funzione per mostrare l'area commenti quando viene cliccato il pulsante
    const handleClick = () => {
        setViewComment(true);
    }

    // Ottieni il parametro "bookASIN" dall'URL usando useParams()
    let {bookASIN} = useParams();
   
    // Rimuovi il carattere ":" dal parametro "bookASIN"
    bookASIN = bookASIN.slice(1);

    // Trova il libro corrispondente all'ASIN dal JSON dei dati
    const bookToShow = jsonData.find(book => book.asin === bookASIN);


    return (
        <>
            <MyNav/>
            {/* Passa il libro e la funzione handleClick al componente DetailForm */}
            <DetailForm book={bookToShow} clickToShowComment={handleClick}/>

             {/* Mostra l'area commenti solo se "view" è true */}
            {viewComment && <CommentArea asin={bookASIN}/>}
            <Footer/>
        </>     
    )
}