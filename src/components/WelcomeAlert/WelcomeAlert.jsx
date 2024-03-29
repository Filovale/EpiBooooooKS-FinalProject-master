import { Alert } from 'react-bootstrap';
import './WelcomeAlert.css'
import { useState, useEffect } from 'react';
import AlertImg from './alertimg.png'

export default function WelcomeAlert () {

    //Utilizzo lo stato locale welcome per tracciare se il messaggio di benvenuto deve essere mostrato o meno.
    //Inizialmente, il messaggio è impostato su true.   
    const [welcome, setWelcome] = useState(true);

    //Utilizza l'hook useEffect per avviare un timeout che imposta lo stato welcome su false dopo 1500 millisecondi
    //che corrisponde al tempo in cui l'alert di benvenuto viene mostrato.
    useEffect(() => {setTimeout(() => { setWelcome(false) }, 1500)}, []);    


    // Se welcome è true, viene mostrato l'alert di benvenuto all'interno di un div
    //Altrimenti, non viene mostrato nulla.
    return (
        
        <>
            {welcome && 
            <div className='d-flex justify-content-center mt-4 position-up'>
                <Alert className='welcome-message d-flex flex-column align-items-center'>
                    <img className='img-fluid' src={AlertImg} alt="" />
                    <h3 className='fs-6 mb-4'>Welcome to EpiBooooooKS</h3>
                    <p>You're Bookfriend by Filovale</p>
                </Alert>
            </div>}
        </>
    )
}
    