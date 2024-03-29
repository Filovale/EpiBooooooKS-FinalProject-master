import CommentList from './CommentList.jsx';
import AddComment from './AddComment.jsx';
import { useState, useEffect } from 'react';

//CommentArea è un componente funzionale che riceve l'ASIN del libro come props.
export default function CommentArea ({ asin }) {

    //Inizializzo lo stato comments utilizzando useState, impostato inizialmente come un array vuoto.
    const [comments, setComments] = useState([]);
    
    //autorizzazione 
    const key = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWRjNmIwNjY1MDNmNTAwMWE1ODc4OTQiLCJpYXQiOjE3MTE3MDYwNzcsImV4cCI6MTcxMjkxNTY3N30.Fm5Zg6l_z4-J7YsYkRzIiS6pMG4rU5CZMBY6n_9NoJU";
    
    //endpoint GET: 
    const ENDPOINT_get = `https://striveschool-api.herokuapp.com/api/comments/${asin}`

    useEffect(() => {

        //Definisco una funzione asincrona getComments che esegue una richiesta GET all'endpoint specificato
        const getComments = async () => {
            try {
            const response = await fetch(ENDPOINT_get, {
                headers: {
                    Authorization: key,
                },
                }
            )
            if (response.ok) {
                const comments = await response.json();
                setComments(comments);
                console.log(comments)
            } else {
                console.log('error')
            }
            } catch (error) {
            console.log(error)
            }
        }
        if (asin) {
            getComments();
        }
    }, [asin]);   

    return (
        <>
            <CommentList commentToShow={comments}/>
            <AddComment/>
        </>
        
    )
}