import jsonData from './data/horror.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useContext } from 'react';
import { ThemeContext } from "./context/ThemeContextProvider.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookDetails from './components/DetailForm/BookDetails.jsx';
import Homepage from './Home&NotFound/Homepage.jsx';
import NotFound from './Home&NotFound/NotFound.jsx';

function App() {


  //Imposto lo stato iniziale per creare poi l'input sulla barra di ricerca della navbar
  const [inputName, setInputName] = useState("");


  //Creo questa funzione per dare a setInputName il valore di quello che viene scritto nella barra di ricerca
  const handleSearch = (event) => {setInputName(event.target.value)};


  //Questo serve per restituire a schermo i risultati dell'input di ricerca, tutto in caratteri minuscoli
  const searchResult = jsonData.filter((element) => {return element.title.toLowerCase().includes(inputName.toLowerCase())});


  //Applico il themeContext alla pagina principale
  const { theme } = useContext(ThemeContext);
  const pageTheme = theme === "dark" ? "bg-dark" : "bg-light";


  return (

    //Per il bottone per il cambio tema
    <div className={pageTheme}>

      {/*Utilizzo il componente BrowserRouter di React Router per avvolgere il contenuto dell'applicazione.*/}
      <BrowserRouter>

        {/*Per definire le rotte dell'applicazione.*/}
        <Routes>

          {/*La rotta principale mostra il componente Homepage. Passa i risultati e la funzione della ricerca come props al componente Homepage.*/}
          <Route path='/' element={<Homepage results={searchResult} text={inputName} onSearchChange={handleSearch}/>}></Route>
          {/*Mostra il componente NotFound quando viene richiesta una pagina non esistente.*/}
          <Route path='*' element={<NotFound/>}></Route>
          {/*Mostra il componente BookDetails per visualizzare i dettagli di un libro specifico*/}
          <Route path='/details/:bookASIN' element={<BookDetails/>}></Route>

        </Routes>    
      </BrowserRouter>
    </div>
  );
}

export default App;
