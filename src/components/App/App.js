import { Route, Routes } from "react-router";
import  Register  from "../Register/Register";
import Login from "../Login/Login";
import Main from "../Main/Main"
import Profile from "../Profile/Profile"
import Movies from "../Movies/Movies"
import SavedMovies from "../SavedMovies/SavedMovies"
import NotFound from "../NotFound/NotFound"
import React from 'react'
import api from '../../utils/api';
import MainApi from '../../utils/MainApi';
import CurrentUserContext from '../../contexts/CurrentUserContext'
import authorizeApi from '../../utils/authorizeApi';


function App() {
    const [token, setToken] = React.useState(localStorage.getItem('token'));
    const [allMovies, setAllMovies] = React.useState([]);
    const [filterMovies, setFilterMovies] = React.useState([]);
    const [sliceMovies, setSliceMovies] = React.useState([]);
    const [showNextButton, setShowNextButton] = React.useState(false)
    const [showCount, setShowCount] = React.useState(3)
    const [currentUser, setСurrentUser] = React.useState({});
    const [saveMovies, setSaveMovies] = React.useState([]);
    const [savedFilter, setSavedFilter] = React.useState({});



    React.useEffect(() => {
      if (token){
        const dataUser = MainApi.getInfoUser(token);
      
        dataUser
        .then((data) => {
        setСurrentUser(data.data)
      })
      .catch((err) => {
        // errorPopup(err)
      });
      }
      }
      , [token]);

      function deletLike(toDelete) {
        const dellike = MainApi.deleteCard(toDelete._id ?? toDelete.deleteId, token)

        dellike
        .then((data) => {
          const deleted = allMovies.find(function(movie) { return movie.id === (toDelete.movieId ?? toDelete.id)})
          deleted.liked = false;

          FilterMovies(savedFilter.name, savedFilter.check)
          SliceMovies()
        })
        .catch((err) => {
          console.log(err)
        });
      }



      function AddLIkes(movies){
        for (let i = 0; i < movies.length; i++) {
          let savedFilm = saveMovies.find(function (saved) { return saved.movieId === movies[i].id});

          movies[i].liked = savedFilm !== undefined
          movies[i].deleteId = savedFilm ? savedFilm._id : undefined;
        }

        setAllMovies(movies);
      }
    
    function FilterMovies(nameFilmRU, isShort) {
        const resault = allMovies
            .filter(movie => movie.nameRU.toLowerCase().includes(nameFilmRU.toLowerCase()))
            .filter(movie => !isShort || movie.duration <= 40)

        

        setFilterMovies(resault)
    }
    function HandleNextButton() {
        setShowCount(showCount+3) 
        SliceMovies()
    }
    function SliceMovies() {
        setShowNextButton(
            filterMovies.length > showCount
        )
        setSliceMovies(filterMovies.slice(0, showCount))
    }
    function PoiskFilmov(e) {
      const qerysaveMovies= MainApi.getCards(token);
      qerysaveMovies
      .then((datasave) => {

        setSaveMovies(datasave.data)

        if(allMovies.length === 0) {
          let dataUser = api.getInfoUser();
          
          dataUser
          .then((data) => {
              setShowCount(3)
              AddLIkes(data)
              FilterMovies(e.name, e.check)
              SliceMovies()
          })
          .catch((err) => {
              console.log(err)
          });
      }
         else {
          setShowCount(3)
          AddLIkes(allMovies)
          FilterMovies(e.name, e.check)
          SliceMovies()
         }
        
         setSavedFilter({name : e.name, check : e.check})
      })
      .catch((err) => {
        console.log(err)
      });
    }

    /*регистрация*/
  function handleSubmitUser(regData){
   
    const signUp =  authorizeApi.signUp(regData)
    signUp
    .then((data) => {
     
    //  setPopupText('Вы успешно зарегистрировались!')
    //  setPopupIcon(regConfirmIcon)
    //  setIsPopupInfo(true)
       
      
       
     })
     .catch((err) => {
    //    errorPopup(err)
     });
   }

/*Авторизация*/ 

function handleSubmitLoginUser(logData) {
  
    const signIn =  authorizeApi.signIn(logData)
    signIn
    .then((data) => {
      localStorage.setItem('token', data.token);
      setToken(data.token)
    })
    .catch((err) => {
    //   errorPopup(err)
    });
  }

  // Обновление данных Пользователя
  function handleUpdateUser(dataUser) {
    
    const setInfoUser =  MainApi.setInfoUser(dataUser, token)
      setInfoUser
      .then((data) => {
        setСurrentUser(data.data)
        
      })
      .catch((err) => {
        // errorPopup(err)
      });
      
    }
   
    // добавляем карточку
  function handleSaveMovies(data) {
  
    const addPlace =  MainApi.addNewCard(data, token)
    addPlace
    .then((dataAdd) => {
       const added = allMovies.find(function(movie) { return movie.id === (data.movieId ?? data.id)})
       added.liked = true;

       FilterMovies(savedFilter.name, savedFilter.check)
       SliceMovies()
    })
    .catch((err) => {
      console.log(err)
    });
    
  }

    return (
        <div className = "app">
            <CurrentUserContext.Provider value={currentUser} >
            <Routes>
                
                <Route path = "/signup" element = {<Register onSubmitUser={handleSubmitUser}  />} /> 
                <Route path = "/signin" element = {<Login onSubmitUser={handleSubmitLoginUser}  />} />  
                <Route path = "/profile" element = {<Profile onUpdateUser={handleUpdateUser} />} />   
                <Route path = "/" element = { <Main />} />
                <Route path = "/movies" element = {<Movies handleSaveMovies = {handleSaveMovies} deletLike = {deletLike} cards={sliceMovies} handleNextButton={HandleNextButton} showNextButton={showNextButton} handlePoiskFilmov={PoiskFilmov}/>} />
                <Route path = "/saved-movies" element = {<SavedMovies deletLike = {deletLike} />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            </CurrentUserContext.Provider>
        </div>
    );
}

export default App;