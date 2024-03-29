import SingleComment from './SingleComment.jsx';

//La componente riceve due props: commentsToShow: un array contenente i commenti da visualizzare.
export default function CommentList ({ commentToShow }) {

    return (
        //La componente CommentList mappa l'array commentsToShow utilizzando il metodo map.
        //Per ogni commento all'interno dell'array, viene restituito un componente SingleComment.
        //A ciascun componente SingleComment viene assegnata una prop key univoca, utilizzando l'indice dell'array.
        //Viene passato il commento singolo (singleComment) e il codice ASIN del libro (asinBook) come props al componente SingleComment.
        commentToShow.map((comment, index) => {

            //La componente restituisce una lista di componenti SingleComment, ognuno rappresentante un singolo commento.
            //Ogni SingleComment viene creato attraverso la mappatura degli elementi dell'array commentsToShow.
           return <SingleComment key={index} userComment={comment}/>            
        })
    )
}