import "./MoviesCardList.css"

import MoviesCard from "../MoviesCard/MoviesCard"

const MoviesCardList = () => {
    return (
        <div className = "MoviesCardList">
            <div className = "MoviesCardList-box">
<MoviesCard />
<MoviesCard />
<MoviesCard />
<MoviesCard />
<MoviesCard />
            </div>
            <button className = "MoviesCardList-buttom">Ещё</button>


        </div>
    );
}


export default MoviesCardList;