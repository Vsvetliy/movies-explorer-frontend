import "./SavedMovies.css"
import SearchForm from "../SearchForm/SearchForm"

import MoviesCardList from "../MoviesCardList/MoviesCardList"
import Footer from "../Footer/Footer"

const SavedMovies = () => {
    return (
        <div className = "SavedMovies">
        <SearchForm />                
        <MoviesCardList />
        <Footer />

        </div>
    );
}


export default SavedMovies;