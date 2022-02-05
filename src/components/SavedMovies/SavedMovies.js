import "./SavedMovies.css"
import SearchForm from "../SearchForm/SearchForm"
import MainApi from '../../utils/MainApi';
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import Footer from "../Footer/Footer"
import HeaderLogIn from "../HeaderLogIn/HeaderLogIn"
import React from 'react'
const SavedMovies = (props) => {
  const [token, setToken] = React.useState(localStorage.getItem('token'));  
  const [saveMovies, setSaveMovies] = React.useState([])

    // function queryMovies(token) {
      
    //   const dataCards = MainApi.getCards(token);
    //   dataCards
    // .then((data) => {
    //   setSaveMovies(data.data)
    //   console.log(data)
    // })
    // .catch((err) => {
    //   // errorPopup(err)
    // });
    // }

    React.useEffect(() => {
        onLoad()
      }, [])

      function onLoad() {
        const dataCards = MainApi.getCards(token);
        dataCards
          .then((data) => {
            setSaveMovies(data.data)
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
        <SearchForm />                
        <MoviesCardList deletLike = {deletLike} cards = {saveMovies} />
        <Footer />

        </div>
    );
}


export default SavedMovies;