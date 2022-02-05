import "./Movies.css"
import React from 'react'
import SearchForm from "../SearchForm/SearchForm"
import CurrentUserContext from '../../contexts/CurrentUserContext'
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import Footer from "../Footer/Footer"
import HeaderLogIn from "../HeaderLogIn/HeaderLogIn"
const Movies = (props) => {
    
    const CurrentUser = React.useContext(CurrentUserContext);
    return (
        <div className = "content">
           <HeaderLogIn/>
           <SearchForm KnopkaPoisk={props.handlePoiskFilmov} />                 
           <MoviesCardList handleNextButton = {props.handleNextButton} cards={props.cards} showNextButton={props.showNextButton}/>
           <Footer /> 

        </div>
    );
}


export default Movies;