import "./MoviesCard.css"

import movieImg from "../../images/movieImg.png"
import like from "../../images/like.svg"
const MoviesCard = () => {
    return (
        <div class = "moviesCard">
        <div class = "moviesCard-info">
             <h4 class = "moviesCard-info__title">ghghgh</h4>
             <p class = "moviesCard-info_time">112.45</p>
             <img class = "moviesCard-info_logoLike" src={like} alt="like"></img>
        </div>

         <div class = "moviesCard-fotoBox">
             <img class = "moviesCard-fotoBox__img" src={movieImg} alt="Обложка фильма"></img>
         </div>
</div>


    );
}


export default MoviesCard;