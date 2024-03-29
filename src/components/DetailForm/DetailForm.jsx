import './DetailForm.css';
import { Container, Row, Col} from 'react-bootstrap';
import React, { useContext } from 'react';
import { ThemeContext } from "../../context/ThemeContextProvider";

//clickToShowComment: Una funzione che viene chiamata quando l'utente clicca sul pulsante per visualizzare i commenti.
export default function DetailForm ({ book, clickToShowComment}) {

    //Estrai le informazioni sul libro dalle props
    const { title, img, price} = book;

    //Recupera il tema corrente dal context
    const {theme} = useContext(ThemeContext);

    //Determina il colore del testo in base al tema
    const themeText = theme === "dark" ? "text-light" : "text-dark";

    return (
        <Container className="container m-4">
        <Row>
            <Col xs={12} md={3} lg={5} className="d-flex align-content-center justify-content-center">
                <img className="image-details" src={img} alt="copertina_libro"/>
            </Col>
            <Col xs={12} md={9} lg={7}>
                <div>
                    <h2 className={`size-title text-uppercase mb-4 ${themeText}`}>{title}</h2>                         
                    <span className={`mb-3 fw-lighter text-uppercase size-price ${themeText}`}>{`${price} €`}</span>
                </div>
                <button className="btn-show-comments mt-5" onClick={clickToShowComment}>Show comments</button>
            </Col>
        </Row>
    </Container>   
    )
}