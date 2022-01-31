import "./MoviesCard.css"
import deletLike from "../../images/delLikeMov.svg"
import movieImg from "../../images/movieImg.png"
import Like from "../../images/like.svg"
import LikeRed from "../../images/LikeRed.svg"

const MoviesCard = (props) => {

    console.log(props.Likes)
    return (
        <div className = "moviesCard">
            <div className = "moviesCard-info">
                <div>
                    <h4 className = "moviesCard-info__title">33 слова о дизайне</h4>
                    <p className = "moviesCard-info_time">112.45</p>
                </div>
                <button className="moviesCard-info_LikeButtom">
                <img className = "moviesCard-info_logoLike" src={props.Likes === 1 ? deletLike : props.Likes === 2 ? Like : LikeRed} alt="delet Like"></img>
                </button>
            </div>

            <div className = "moviesCard-fotoBox">
                <img className = "moviesCard-fotoBox__img" src={movieImg} alt="Обложка фильма"></img>
            </div>
        </div>


    );
}


export default MoviesCard;