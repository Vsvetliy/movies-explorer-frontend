import "./MoviesCard.css"
import deletLike from "../../images/delLikeMov.svg"

import Like from "../../images/like.svg"
import LikeRed from "../../images/LikeRed.svg"

const MoviesCard = (props) => {

    
    return (
        <div className = "moviesCard">
            <div className = "moviesCard-info">
                <div>
                    <h4 className = "moviesCard-info__title">{props.dataCard.nameRU}</h4>
                    <p className = "moviesCard-info_time">{props.dataCard.duration}</p>
                </div>
                <button className="moviesCard-info_LikeButtom">
                <img className = "moviesCard-info_logoLike" src={props.Likes === 1 ? deletLike : props.Likes === 2 ? Like : LikeRed} alt="delet Like"></img>
                </button>
            </div>

            <a className = "moviesCard-fotoBox" href={props.dataCard.trailerLink} target="_blank" rel="noreferrer">
                <img className = "moviesCard-fotoBox__img" src={"https://api.nomoreparties.co/" + props.dataCard.image.url } alt="Обложка фильма"></img>
            </a>
        </div>


    );
}


export default MoviesCard;