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
import CurrentUserContext from '../../contexts/CurrentUserContext'
import authorizeApi from '../../utils/authorizeApi';


function App() {
    const [token, setToken] = React.useState(localStorage.getItem('token'));
    const [allMovies, setAllMovies] = React.useState([]);
    const [filterMovies, setFilterMovies] = React.useState([]);
    const [sliceMovies, setSliceMovies] = React.useState([]);
    const [showNextButton, setShowNextButton] = React.useState(false)
    const [showCount, setShowCount] = React.useState(3)
    
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
           
            if(allMovies.length === 0) {
                let dataUser = api.getInfoUser();
                
                dataUser
                .then((data) => {
                    setAllMovies(data)
                    setShowCount(3)
                    FilterMovies(e.name, e.check)
                    SliceMovies()
                })
                .catch((err) => {
                    
                });
            }
            else {
                setShowCount(3)
                FilterMovies(e.name, e.check)
                SliceMovies()
            }

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
   


    return (
        <div className = "app">
            <CurrentUserContext.Provider value={allMovies}>
            <Routes>
                
                <Route path = "/signup" element = {<Register onSubmitUser={handleSubmitUser}  />} /> 
                <Route path = "/signin" element = {<Login onSubmitUser={handleSubmitLoginUser}  />} />  
                <Route path = "/profile" element = {<Profile />} />   
                <Route path = "/" element = { <Main />} />
                <Route path = "/movies" element = {<Movies  cards={sliceMovies} handleNextButton={HandleNextButton} showNextButton={showNextButton} handlePoiskFilmov={PoiskFilmov}/>} />
                <Route path = "/saved-movies" element = {<SavedMovies />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            </CurrentUserContext.Provider>
        </div>
    );
}

export default App;