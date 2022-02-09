import "./Profile.css"
import React from "react";
import HeaderLogIn from "../HeaderLogIn/HeaderLogIn"
import CurrentUserContext from '../../contexts/CurrentUserContext'
import UpdateOk from '../UpdateOk/UpdateOk'

const Profile = (props) => {
  const currentUser = React.useContext(CurrentUserContext);
  const inputName = React.createRef();
  const inputEmail = React.createRef();
  const [token, setToken] = React.useState(localStorage.getItem('token'));
  
  
  

  function handleSubmit(e) {
      if(inputName.current.value === currentUser.name && inputEmail.current.value === currentUser.email) return;
   
    
  
      props.onUpdateUser({
        name:inputName.current.value,
        email:inputEmail.current.value,
        });
    }

    // onClick={handleSubmit}

    return (
      <div className = "profile">
          <HeaderLogIn/>     
              
        <h2 className = "profile-top__text">Привет, {currentUser.name}!</h2>
            
        <form className="profile-form">

          <div className="profile-form-name">
              <label htmlFor="name" className="profile-form__label">Имя</label>   
              <input  ref={inputName} defaultValue={currentUser.name}    type="text" id="name" className="profile-form__input" name="name" required></input>
          </div>   

          <div className="profile-form-email">
              <label htmlFor="email" className="profile-form__label">E-mail</label>
              <input ref={inputEmail}  defaultValue={currentUser.email}    type="email" id="email" className="profile-form__input" name="email" required></input>
            </div>                 
        </form>
        {props.saveUser ?  <UpdateOk /> : null}
        <div className='profile-buttonbox'>
          <h3 onClick={handleSubmit}  className='profile-buttonbox__reg'>Редактировать</h3>

          <h3 onClick={props.exitUser} className='profile-buttonbox__exit'><a className='profile-buttonbox__exit__link' href="/">Выйти из аккаунта</a></h3>
        </div>
      </div>  
    );
}

export default Profile;