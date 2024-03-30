import CommentList from './CommentList.jsx';
import AddComment from './AddComment.jsx';
import { useState, useEffect } from 'react';
import Loading from './Loading'
import Error from './Error'
import './CommentArea.css';

//CommentArea è un componente funzionale che riceve l'ASIN del libro come props.
export default function CommentArea ({ asin }) {

    //Inizializzo lo stato comments utilizzando useState, impostato inizialmente come un array vuoto.
    const [comments, setComments] = useState([]);

    //isLoading viene utilizzato per indicare se il componente sta caricando i dati dei commenti.
    //isError viene utilizzato per indicare se si è verificato un errore durante il recupero dei commenti.
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    
    //autorizzazione 
    const key = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWRjNmIwNjY1MDNmNTAwMWE1ODc4OTQiLCJpYXQiOjE3MTE3MDYwNzcsImV4cCI6MTcxMjkxNTY3N30.Fm5Zg6l_z4-J7YsYkRzIiS6pMG4rU5CZMBY6n_9NoJU";
    
    //endpoint GET: 
    const ENDPOINT_get = `https://striveschool-api.herokuapp.com/api/comments/${asin}`

    //viene definita una funzione asincrona getComments che esegue una richiesta GET all'endpoint specificato
    useEffect(() => {


        const getComments = async () => {

            //isLoading viene impostato su true per mostrare il componente di caricamento.
            setIsLoading(true)

            try {
            const response = await fetch(ENDPOINT_get, {
                headers: {
                    Authorization: key,
                },
                }
            )
            
            //Se la richiesta ha successo, i commenti vengono estratti dal corpo della risposta e impostati nello stato comments utilizzando setComments.
            //isLoading viene impostato su false per nascondere il componente di caricamento.
            if (response.ok) {
                const comments = await response.json();
                setComments(comments);
                setIsLoading(false)
                setIsError(false)

            } else {
                console.log('error')
                setIsLoading(false)
                setIsError(true)
            }

            } catch (error) {
            console.log(error)
            setIsLoading(false)
            setIsError(true)
            }
        }

        if (asin) {
            getComments();
        }

    }, [asin]);   


    return (
        <>  
            <div className='background-comment comment-area-height comment-area-fixed'>
                {isLoading && <Loading />}
                {isError && <Error />}
                <CommentList commentToShow={comments}/>
                <AddComment/>
            </div>
        </>
        
    )
}