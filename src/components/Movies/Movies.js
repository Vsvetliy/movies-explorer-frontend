import "./Movies.css"
import SearchForm from "../SearchForm/SearchForm"

import MoviesCardList from "../MoviesCardList/MoviesCardList"
import Footer from "../Footer/Footer"

const Movies = () => {
    return (
        <div className = "content">
        <SearchForm />                
        <MoviesCardList />
        <Footer />

        </div>
    );
}


export default Movies;