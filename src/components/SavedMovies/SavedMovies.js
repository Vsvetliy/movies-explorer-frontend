import "./SavedMovies.css"
import SearchForm from "../SearchForm/SearchForm"
import MainApi from '../../utils/MainApi';
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import Footer from "../Footer/Footer"
import HeaderLogIn from "../HeaderLogIn/HeaderLogIn"
import React from 'react'
import NoSearch  from '../NoSearch/NoSearch';
const SavedMovies = (props) => {
  const [token, setToken] = React.useState(localStorage.getItem('token'));  
  const [saveMovies, setSaveMovies] = React.useState([])
  const [filterMovies, setFilterMovies] = React.useState([])
  const [clikPoisk, setClikPoisk] = React.useState(false);

    // Поиск фильмов

  function PoiskFilmov(e) {
    
    const resault = saveMovies
            .filter(movie => movie.nameRU.toLowerCase().includes(e.name.toLowerCase()))
            .filter(movie => !e.check || movie.duration <= 40)
       
            setClikPoisk(true)
        setFilterMovies(resault)
             
       
  }

    React.useEffect(() => {
        onLoad()
      }, [])

      function onLoad() {
        const dataCards = MainApi.getCards(token);
        dataCards
          .then((data) => {
            setSaveMovies(data.data)
            setFilterMovies(data.data)
          })
          .catch((err) => {
             // errorPopup(err)
          });
      }

      function deletLike(toDelete) {
        const dellike = MainApi.deleteCard(toDelete._id ?? toDelete.deleteId, token)

        dellike
        .then((data) => {
          onLoad()
        })
        .catch((err) => {
          console.log(err)
        });
      }
    
    return (
        <div className = "SavedMovies">
          <HeaderLogIn/>
        <SearchForm KnopkaPoisk={PoiskFilmov} />   
        {filterMovies.length === 0 && clikPoisk ? (<NoSearch />) : null}                  
        <MoviesCardList deletLike = {deletLike} cards = {filterMovies} />
        <Footer />

        </div>
    );
}


export default SavedMovies;