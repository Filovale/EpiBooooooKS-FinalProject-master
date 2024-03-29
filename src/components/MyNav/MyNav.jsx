import { Container, Navbar, Nav, Form } from "react-bootstrap";
import "./MyNav.css";
import React, { useContext } from 'react';
import { ThemeContext } from "../../context/ThemeContextProvider";
import ThemeButton from './ThemeButton';
import { useLocation } from "react-router-dom";

//Creo il component MyNav e ci passo come parametri il testo e la funzione che su app.jsx sono rispettivamente
//l'imputName che cambia col testo inserito e la funzione che gli assegna il valore
export default function MyNav ({ text, onSearchChange}) {

  //Per accedere al contesto ThemeContext e recuperare lo stato corrente del tema e la funzione per cambiarlo.
  const { theme, setTheme } = useContext(ThemeContext);

  //La funzione changeTheme viene chiamata quando l'utente preme il pulsante per cambiare il tema.
  const changeTheme = () => {setTheme(theme === "dark" ? "light" : "dark")};

  //Per dare le classi in base al tema corrente in modo che il css gestisca il loro style
  const navBarTheme = theme === "light" ? "bg-light" : "bg-dark";
  const linkTheme = theme === "dark" ? "color-dark color-hover-dark" : "color-light color-hover-light";
 
  //Viene utilizzato useLocation per ottenere la posizione corrente dell'applicazione e assegnarla alla variabile.
  //che rappresenta la posizione corrente
  const currentPage = useLocation();
  
  //Se la posizione corrente è la homepage ("/"), viene restituita una Navbar con il campo di ricerca e il pulsante per il cambio tema
  if (currentPage.pathname === "/") {

    return (

      <Navbar className={navBarTheme}>
        <Container className="justify-content-start">

          <Nav className="pe-2">
            <Nav.Link href="#" className={linkTheme}>Home</Nav.Link>
            <Nav.Link href="#" className={linkTheme}>Details</Nav.Link>
            <Nav.Link href="#" className={linkTheme}>Contacts</Nav.Link>
          </Nav>
          
          {/*Per il costrutto della navbar per inserire la ricerca libro */}
          <Form.Control className='search-field-style' type="text" id="inputSearch" placeholder="Search something..." aria-describedby='searchBooks' value={text} onChange={onSearchChange}/>  
          <ThemeButton changeTheme={changeTheme}/> 
        </Container>         
      </Navbar>
    )

    //viene restituita solo la Navbar senza il campo di ricerca e il pulsante per il cambio tema, quando si è nella pagina dettagli del singolo book
  } else {

    return (

      <Navbar className={navBarTheme}>
        <Container className="justify-content-start">

          <Nav className="pe-2">
            <Nav.Link href="#" className={linkTheme}>Home</Nav.Link>
            <Nav.Link href="#" className={linkTheme}>Details</Nav.Link>
            <Nav.Link href="#" className={linkTheme}>Contacts</Nav.Link>
          </Nav>

        </Container>         
    </Navbar>
    )
  }

}