import "./MoviesCard.css"

import movieImg from "../../images/movieImg.png"
import like from "../../images/like.svg"
const MoviesCard = () => {
    return (
        <div className = "moviesCard">
            <div className = "moviesCard-info">
                <div>
                    <h4 className = "moviesCard-info__title">33 слова о дизайне</h4>
                    <p className = "moviesCard-info_time">112.45</p>
                </div>
                <img className = "moviesCard-info_logoLike" src={like} alt="like"></img>

            </div>

            <div className = "moviesCard-fotoBox">
                <img className = "moviesCard-fotoBox__img" src={movieImg} alt="Обложка фильма"></img>
            </div>
        </div>


    );
}


export default MoviesCard;