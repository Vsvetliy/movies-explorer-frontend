import "./Movies.css"
import React from 'react'
import SearchForm from "../SearchForm/SearchForm"
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import Footer from "../Footer/Footer"
import HeaderLogIn from "../HeaderLogIn/HeaderLogIn"
import Preloader  from '../Preloader/Preloader';
import NoSearch  from '../NoSearch/NoSearch';
const Movies = (props) => {
    return (
        <div className = "content">
           <HeaderLogIn/>
           <SearchForm KnopkaPoisk={props.handlePoiskFilmov} /> 

           {props.loading ? (<Preloader />) : props.cards.length === 0 && props.setClikPoisk ? (<NoSearch />) : null}     

           <MoviesCardList deletLike = {props.deletLike} handleSaveMovies = {props.handleSaveMovies} handleNextButton = {props.handleNextButton} cards={props.cards} showNextButton={props.showNextButton}/>
           <Footer /> 

        </div>
    );
}


export default Movies;