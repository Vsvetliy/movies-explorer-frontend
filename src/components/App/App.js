import { Route, Routes, Switch, useNavigate, useLocation, BrowserRouter } from "react-router-dom";

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
import popupErr from '../../images/popupErr.svg';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import InfoToolTip from '../InfoToolTip/InfoToolTip'


function App() {
    const location = useLocation();
    const [token, setToken] = React.useState(localStorage.getItem('token'));



    const [allMovies, setAllMovies] = React.useState([]);

    const [filterMovies, setFilterMovies] = React.useState([]);
    const [sliceMovies, setSliceMovies] = React.useState([]);
    const [showNextButton, setShowNextButton] = React.useState(false)
    const [showCount, setShowCount] = React.useState(3)
    const [currentUser, setСurrentUser] = React.useState({});
    const [saveMovies, setSaveMovies] = React.useState([]);
    const [savedFilter, setSavedFilter] = React.useState({});
    const [loading, setLoading] = React.useState(false);
    const [cardsLoading, setCardsLoading] = React.useState(false);
    const [clikPoisk, setClikPoisk] = React.useState(false);
    const history = useNavigate()
    const [filter, setfilter] = React.useState({})
    const [isPopupInfo, setIsPopupInfo] = React.useState(false);
    const [popupText, setPopupText] = React.useState();
    const [popupIcon, setPopupIcon] = React.useState();
    const [loggedIn, setLoggedIn] = React.useState(false);
    const [saveUser, setSaveUser] = React.useState(false);


    let films = localStorage.getItem('films')
    let check = localStorage.getItem('check')
    
    if(films !== null && filter.name === undefined && cardsLoading !== true && token) {
      PoiskFilmov({name: films, check: check === "true"})
    }



    function closePopup(){
      setIsPopupInfo(false)
    }

    function errorPopup(err) {
      console.log(err);
      setPopupText('Что-то пошло не так! Попробуйте ещё раз.')
      setPopupIcon(popupErr)
      setIsPopupInfo(true)
      
     }






    React.useEffect(() => {
      if (token){
        if (currentUser.id) return;
        
        const dataUser = MainApi.getInfoUser(token);
      
        dataUser
        .then((data) => {
          
          setСurrentUser(data.data)
          setLoggedIn(true)
          

          if (location.pathname === '/signin' || location.pathname === '/signup' || location.pathname === '/movies') {
            history('/movies');
          } else if (location.pathname === '/saved-movies') {
            history('/saved-movies');
          } else if (location.pathname === '/profile') {
            history('/profile')
          }
            // history("/")
            
      })
      .catch((err) => {
        errorPopup(err)
      });
      }else{
        setСurrentUser({})
        

        if (location.pathname === '/profile' || location.pathname === '/saved-movies' || location.pathname === '/movies') {
          history('/');
        } else if (location.pathname === '/signin') {
          history('/signin');
        } else if (location.pathname === '/signup') {
          history('/signup')
        }




      }

      }
      , [token]);


      function exitUser() {

    
        localStorage.removeItem("token")
        localStorage.removeItem("films")
        localStorage.removeItem("check")
        setToken('')
        setLoggedIn(false)
    
      }

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
          errorPopup(err)
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
      if(nameFilmRU === undefined) {
        return
      }
        const resault = allMovies
            .filter(movie => movie.nameRU.toLowerCase().includes(nameFilmRU.toLowerCase()))
            .filter(movie => isShort === false || movie.duration <= 40)

        

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

    React.useEffect(() => {
      if (filter.name === undefined) return;

      if(allMovies.length === 0) {
        setLoading(true);
        let dataUser = api.getInfoUser();
        
        dataUser
        .then((data) => {
            setLoading(false);
            setShowCount(3)
            AddLIkes(data)
            
        })
        .catch((err) => {
          errorPopup(err)
        });
    }
       else {
        setShowCount(3)
        AddLIkes(allMovies)
        

       }
      
       

      }
      , [saveMovies, allMovies, filter.name]);


      React.useEffect(() => {
        if (filter.name === undefined) return;
        FilterMovies(filter.name, filter.check)
        
      }
      , [allMovies, filter.check, filter.name]);


      React.useEffect(() => {
        if (filter.name === undefined) return;
        SliceMovies()
        setClikPoisk(true)
        setSavedFilter({name : filter.name, check : filter.check})

      }
      , [filterMovies, filter.check, filter.name, showCount]);

// Поиск фильмов
    function PoiskFilmov(e) {
      setCardsLoading(true)
      const qerysaveMovies= MainApi.getCards(token);
      qerysaveMovies
      .then((datasave) => {
        
        setSaveMovies(datasave.data)
        localStorage.setItem("films", e.name) 
        localStorage.setItem("check", e.check)
        setfilter(e)
        setCardsLoading(false)
      })
      .catch((err) => {
        setCardsLoading(false)
        errorPopup(err)
        
      });

    }

    /*регистрация*/
  function handleSubmitUser(regData){
   
    const signUp =  authorizeApi.signUp(regData)
    signUp
    .then((data) => {
      handleSubmitLoginUser(regData)
      // history.push("/signin")
      
       
     })
     .catch((err) => {
        errorPopup(err)
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
      errorPopup(err)
    });
  }

  // Обновление данных Пользователя
  function handleUpdateUser(dataUser) {
    
    const setInfoUser =  MainApi.setInfoUser(dataUser, token)
      setInfoUser
      .then((data) => {
        setСurrentUser(data.data)
        setSaveUser(true)
        setTimeout(() => setSaveUser(false), 2000)
      })
      .catch((err) => {
        errorPopup(err)
        setSaveUser(false)
      });
      
    }
   
    // добавляем карточку
  function handleSaveMovies(data) {
  
    const addPlace =  MainApi.addNewCard(data, token)
    addPlace
    .then((dataAdd) => {
       const added = allMovies.find(function(movie) { return movie.id === (data.movieId ?? data.id)})
       added.liked = true;
      added.deleteId = dataAdd.data._id
       FilterMovies(savedFilter.name, savedFilter.check)
       SliceMovies()
    })
    .catch((err) => {
      errorPopup(err)
    });
    
  }

    return (
      <CurrentUserContext.Provider value={currentUser} >
        <div className = "app">
          
                <Routes>
                    <Route exact  path = "/" element = { <Main loggedIn = {loggedIn} />} /> 
                      <Route path = "/signup" element = {<Register onSubmitUser={handleSubmitUser}  />} /> 
                      <Route path = "/signin" element = {<Login onSubmitUser={handleSubmitLoginUser}  />} /> 
                      
                      <Route path="*" element={<NotFound />} />

                      <Route path = "/profile"  element = {<Profile saveUser = {saveUser} loggedIn={loggedIn} exitUser = {exitUser} onUpdateUser={handleUpdateUser} />} />   


                      
                      <Route path = "/movies" element = {<Movies setClikPoisk = {clikPoisk} loading ={loading} handleSaveMovies = {handleSaveMovies} deletLike = {deletLike} cards={sliceMovies} handleNextButton={HandleNextButton} showNextButton={showNextButton} handlePoiskFilmov={PoiskFilmov}/>} />
                      <Route path = "/saved-movies" element = {<SavedMovies deletLike = {deletLike} />} />
                    
                    
                </Routes>
                <InfoToolTip text={popupText} icon ={popupIcon} onClose={closePopup} isOpen={isPopupInfo}/>
        </div>
      </CurrentUserContext.Provider>
    );
}

export default App;