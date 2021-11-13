import "./Register.css"
import logo from "../../images/logo.svg"

const Register = () => {
    return (
      <div className = "register">
          
        <div className = "register-top">
          <img className = "register-top__logo" src={logo} alt = "logo" />
          <h2 className = "register-top__text">Добро пожаловать!</h2>
        </div>
        <form className = "register-form">
          <div className = "register-form__inputBox">
            <label for="name" className = "register-form__label">Имя</label>   
            <input value = "TextText" type="text" id="name" className = "register-form__input" name="name" required></input>
          </div>
          <div className = "register-form__inputBox">
            <label for="email" className = "register-form__label">E-mail</label>
            <input value = "TextText" type="email" id="email" className = "register-form__input" name="email" required></input>
          </div>

          <div className = "register-form__inputBox"> 
            <label for="password" className = "register-form__label">Пароль</label>
            <input type = "password" value = "TextText" className = "register-form__input register-form__input_pass" maxLength="20" minLength="2" id="password" name="password" required></input>
            <span className="register-form-error" id="register-form-error">Что-то пошло не так...</span>
          </div>

        </form>
        <button  type = "submit" name = "submit-button" className = "register-submit">Зарегистрироваться</button>
        <div className = "register-box">
          <h3 className = "register-box__text">Уже зарегистрированы? </h3>
          <a className = "register-box__link" href="/signin">Войти</a>
        </div>
      </div>  
    );
}

export default Register;