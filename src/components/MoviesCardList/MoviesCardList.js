import "./MoviesCardList.css"

import MoviesCard from "../MoviesCard/MoviesCard"



const MoviesCardList = (props) => {
    return (
        <div className = "MoviesCardList">
            <div className = "MoviesCardList-box">
                <MoviesCard Likes = {props.onlikrestik ? 1 : 2}/>
                <MoviesCard Likes ={props.onlikrestik ? 1 : 3}/>

            </div>

            <button  className = {props.onlikrestik ? "MoviesCardList-buttom_none" : "MoviesCardList-buttom" }  >Ещё</button>


        </div>
    );
}


export default MoviesCardList;