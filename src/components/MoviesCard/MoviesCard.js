import "./MoviesCard.css"
import deletLike from "../../images/delLikeMov.svg"
import React from 'react'
import Like from "../../images/like.svg"
import LikeRed from "../../images/LikeRed.svg"
import CurrentUserContext from '../../contexts/CurrentUserContext'

const MoviesCard = (props) => {
    const currentUser = React.useContext(CurrentUserContext);
  
      
    
    function handleLike(e) {
         
     
        props.handleSaveMovies(props.dataCard);
        
      }

      function handleDeletLike(e) {
         
     
        props.deletLike(props.dataCard);
        
      }
    
    return (
        <div className = "moviesCard">
            <div className = "moviesCard-info">
                <div>
                    <h4 className = "moviesCard-info__title">{props.dataCard.nameRU}</h4>
                    <p className = "moviesCard-info_time">{props.dataCard.duration}</p>
                </div>
                <button onClick={props.dataCard.liked === false ? handleLike : handleDeletLike} className="moviesCard-info_LikeButtom">
                <img  className = "moviesCard-info_logoLike" src={props.dataCard.liked === undefined ? deletLike : props.dataCard.liked ? LikeRed : Like} alt="delet Like"></img>
                </button>
            </div>

            <a className = "moviesCard-fotoBox" href={props.dataCard.trailerLink} target="_blank" rel="noreferrer">
                <img className = "moviesCard-fotoBox__img" src={ props.dataCard.image.url ? "https://api.nomoreparties.co/" + props.dataCard.image.url : props.dataCard.image } alt="Обложка фильма"></img>
            </a>
        </div>


    );
}


export default MoviesCard;