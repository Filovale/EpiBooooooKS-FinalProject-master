import './SingleComment.css'
import React, { useContext } from 'react';
import { ThemeContext } from "../../../context/ThemeContextProvider";

//La componente riceve una prop comm, che rappresenta i dati del commento corrente.
export default function SingleComment( {userComment} ) {

    //Dalla prop comm, vengono estratti i campi comment e rate
    const { comment, rate } = userComment; //Aggiungo id per identificare quel commento

    //Controllo sempre del tema dark-light:
    const { theme } = useContext(ThemeContext);


    // Funzione per gestire l'eliminazione del commento
    const deleteComment = async (asin) => {
        try {
          let response = await fetch(
            'https://striveschool-api.herokuapp.com/api/comments/' + asin,
            {
              method: 'DELETE',
              headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWRjNmIwNjY1MDNmNTAwMWE1ODc4OTQiLCJpYXQiOjE3MTE3MDYwNzcsImV4cCI6MTcxMjkxNTY3N30.Fm5Zg6l_z4-J7YsYkRzIiS6pMG4rU5CZMBY6n_9NoJU',
              },
            }
          )
          if (response.ok) {
            alert('Review deleted correctly')
          } else {
            throw new Error('Something went wrong...!')
          }
        } catch (error) {
          alert(error)
        }
      }

    //La componente restituisce un div contenente l'immagine del profilo, il testo del commento, il voto e un pulsante per eliminare il commento.
    return (
        <div className='d-flex align-items-center my-2'>
            <img className='profile-img m-1' src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png" alt="profile_img" />
            <div className='d-flex flex-column comment-style ms-2'>
                <span className={theme === "dark" ? "span-light" : "span-dark"}>{comment}</span>
                <span className={theme === "dark" ? "span-light" : "span-dark"}>{`Rate: ${rate}`}</span>
            </div>
            <button className='btn btn-outline bg-danger text-white ms-5' onClick={deleteComment}>Cancel</button>            
        </div>
    )
}