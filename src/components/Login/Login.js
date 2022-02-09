import "./Login.css"
import logo from "../../images/logo.svg"
import { Link } from "react-router-dom";
import React from "react";
import { FormErrors } from '../FormErrors/FormErrors';

const Login = (props) => {

  
  const inputEmail = React.createRef();
  const inputPassword = React.createRef();
  const [inputPasswordErr, setInputPasswordErr] = React.useState('');
  const [inputMailErr, setInputMailErr] = React.useState('');
  const [isValid, setIsValid] = React.useState(false);


  function handleUserInput () {
    if (inputEmail.current.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      setInputMailErr("")
    }
    else {
      // setInputMailErr("")
      setInputMailErr("Некорректный e-mail")
    }
    
    if (inputPassword.current.value.length < 2) {
      setInputPasswordErr("короткий пароль")
    }
    else {
      setInputPasswordErr("")
    }

    setIsValid(inputPasswordErr === '' && inputMailErr === '')
  }

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
        <form className="login-form">
            <div className = "login-form__inputBox">
                <label htmlFor="email" className = "login-form__label">E-mail</label>
                <input ref={inputEmail} onChange={handleUserInput}   type="email" id="email" className = "login-form__input" name="email" required></input>
            </div>
            <span className = "login-form__label login-form__label-red" >{inputMailErr}</span>
            <div className = "login-form__inputBox"> 
                <label htmlFor="password" className = "login-form__label">Пароль</label>
                <input ref={inputPassword}  onChange={handleUserInput} type = "password"  className = "login-form__input login-form__input_pass" maxLength="20" minLength="2" id="password" name="password" required></input>
            </div>
            <span className = "login-form__label login-form__label-red">{inputPasswordErr}</span>
        </form>
        <button onClick={handleSubmit} disabled={isValid === false} type = "submit" name = "submit-button" className = "login-submit">Войти</button>
        <div className = "login-box">
            <h3 className = "login-box__text">Ещё не зарегистрированы?</h3>
            <Link to="/signup" className = "login-box__link" href="/signin">Регистрация</Link>
        </div>
      </div>  
    );
}

export default Login;