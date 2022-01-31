import "./SavedMovies.css"
import SearchForm from "../SearchForm/SearchForm"

import MoviesCardList from "../MoviesCardList/MoviesCardList"
import Footer from "../Footer/Footer"
import HeaderLogIn from "../HeaderLogIn/HeaderLogIn"
const SavedMovies = () => {
    return (
        <div className = "SavedMovies">
          <HeaderLogIn/>
        <SearchForm />                
        <MoviesCardList onlikrestik ={true} />
        <Footer />

        </div>
    );
}


export default SavedMovies;