import "./Login.css"
import logo from "../../images/logo.svg"
import { Link } from "react-router-dom";
import React from "react";
const Login = (props) => {

  const inputEmail = React.createRef();
  const inputPassword = React.createRef();


  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmitUser(
     { email:inputEmail.current.value,
    password:inputPassword.current.value,}
    );
  }



    return (
      <div className = "login">
        <div className = "login-top">
               <Link to="/"> 
              <img className = "login-top__logo" src={logo} alt = "logo" />
              </Link>  
              <h2 className = "login-top__text">Рады видеть!</h2>
        </div>
        <form onSubmit={handleSubmit} className="login-form">
            <div className = "login-form__inputBox">
                <label htmlFor="email" className = "login-form__label">E-mail</label>
                <input ref={inputEmail}   type="email" id="email" className = "login-form__input" name="email" required></input>
            </div>

            <div className = "login-form__inputBox"> 
                <label htmlFor="password" className = "login-form__label">Пароль</label>
                <input ref={inputPassword}  type = "password"  className = "login-form__input login-form__input_pass" maxLength="20" minLength="2" id="password" name="password" required></input>
            </div>
        </form>
        <button onClick={handleSubmit}  type = "submit" name = "submit-button" className = "login-submit">Войти</button>
        <div className = "login-box">
            <h3 className = "login-box__text">Ещё не зарегистрированы?</h3>
            <Link to="/signup" className = "login-box__link" href="/signin">Регистрация</Link>
        </div>
      </div>  
    );
}

export default Login;