import { Form, Button } from "react-bootstrap";
import { useState } from 'react';
import React, { useContext } from 'react';
import { ThemeContext } from "../../../context/ThemeContextProvider";


export default function AddComment ({asin, postComments}) {
        
    //Il tema viene utilizzato per impostare lo stile del componente e il tema corrente
    const { theme } = useContext(ThemeContext);
    const addCommentTheme = theme === "dark" ? "font-color-light" : "font-color-dark";

    //Lo stato newComment è utilizzato per memorizzare il nuovo commento. Inizialmente, il commento è vuoto ("") e il tasso (rate) è null.
    const [newComment, setNewComment] = useState({comment: "", rate: null, elementId: asin});

    //Quando l'utente invia il comm, viene chiamata la funzione handleNewComment.
    const handleNewComment =  (event) => {

        //Previene il comportamento predefinito del form utilizzando event.preventDefault()
        event.preventDefault();

        //Successivamente, chiamo la funzione postComments passando il nuovo commento come argomento.
        postComments(newComment);

        //Dopo l'invio del commento, lo stato newComment diventa oggetto vuoto per consentire all'utente di aggiungere ulteriori commenti.
        setNewComment({comment: "", rate: "", elementId: asin});

    }  

    return (

        <Form className="px-5 py-2" onSubmit={handleNewComment}>

            <Form.Group className="mb-3" controlId="controlComment">
                <Form.Label className={addCommentTheme}>Write your comment there:</Form.Label>
                <Form.Control type="textarea" rows={2} value={newComment.comment} placeholder="Write something..." onChange={(e) => {setNewComment({...newComment, comment: e.target.value })}}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="controlRate">
                <Form.Select as="selection" max={5} value={newComment.rate} onChange={(e) => {setNewComment({...newComment, rate: e.target.value })}}>

                <option>1 to 5 rate selector</option>

                <option value="1">1</option> 
                <option value="2">2</option> 
                <option value="3">3</option> 
                <option value="4">4</option> 
                <option value="5">5</option>

                </Form.Select>
            </Form.Group>     
            <Button type="submit">Save and commit</Button>       
        </Form>        
    )
}