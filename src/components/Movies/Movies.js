import SearchForm from "../SearchForm/SearchForm"
import AboutProject from "../AboutProject/AboutProject"
import Techs from "../Techs/Techs"
import AboutMe from "../AboutMe/AboutMe"
import MoviesCardList from "../MoviesCardList/MoviesCardList"

const Movies = () => {
    return (
        <movies className = "content">
        <SearchForm />                
        <MoviesCardList />
        </movies>
    );
}


export default Movies;