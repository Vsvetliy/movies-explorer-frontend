import "./Movies.css"
import SearchForm from "../SearchForm/SearchForm"

import MoviesCardList from "../MoviesCardList/MoviesCardList"
import Footer from "../Footer/Footer"
import HeaderLogIn from "../HeaderLogIn/HeaderLogIn"
const Movies = () => {
    return (
        <div className = "content">
           <HeaderLogIn/>
           <SearchForm />                 
           <MoviesCardList />
           <Footer /> 

        </div>
    );
}


export default Movies;