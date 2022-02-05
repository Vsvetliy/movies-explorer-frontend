import "./MoviesCardList.css"

import MoviesCard from "../MoviesCard/MoviesCard"



const MoviesCardList = (props) => {
    
    return (
        <div className = "MoviesCardList">
            <div className = "MoviesCardList-box">
            {props.cards.map(card => (
             
             <MoviesCard key={card.id}  dataCard={card} />
             ))}

                
               

            </div>

            <button onClick={props.handleNextButton}  className = {props.showNextButton ? "MoviesCardList-buttom" : "MoviesCardList-buttom_none"}  >Ещё</button>


        </div>
    );
}


export default MoviesCardList;