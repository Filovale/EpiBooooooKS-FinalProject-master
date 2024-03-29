import MyNav from '../components/MyNav/MyNav.jsx';
import WelcomeAlert from '../components/WelcomeAlert/WelcomeAlert.jsx';
import AllBooks from '../components/Main/AllBooks.jsx';
import Footer from '../components/Footer/Footer.jsx';

//Homepage un componente che accetta tre props: results, text e onSearchChange. Results contiene i risultati
//della ricerca dei libri, text è il testo dell'utente di ricerca e onSearchChange funzione di gestione di tale ricerca
export default function Homepage ({ results, text, onSearchChange }) {

    return (
        <>
            {/*Riceve il testo di ricerca e la funzione di gestione della ricerca come props.*/}
            <MyNav text={text} onSearchChange={onSearchChange}/>
            <WelcomeAlert/>
            {/*Riceve l'array dei risultati della ricerca come props.*/}
            <AllBooks results={results}/>
            <Footer />
        </>        
    )
}