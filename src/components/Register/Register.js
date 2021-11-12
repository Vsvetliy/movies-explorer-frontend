import "./Register.css"
import logo from "../../images/logo.svg"

const Register = () => {
    return (
      <div className = "register">
          
            <div className = "register-top">
              <img className = "register-top__logo" src={logo} alt = "logo" />
              <h2 className = "register-top__text">Добро пожаловать!</h2>
            </div>
            <form className="register-form">
              <label for="name" className="register-form__label">
                {" "}
                Имя
              </label>   
              <input type="text" id="name" className="register-form__input" name="name" required></input>
              <label for="email" className="register-form__label">
                {" "}
                E-mail
              </label>
              <input type="email" id="email" className="register-form__input" name="email" required></input>
              <label for="password" className="register-form__label">
                Пароль
              </label>
              <input className="register-form__input" maxLength="20" minLength="2" id="password" name="password" required></input>
            </form>
            <button  type = "submit" name = "submit-button" className="register__submit-button">
              Зарегистрироваться
    </button>
    <div className='register__regText'>
      <h3 className='register__regText'>Уже зарегистрированы? </h3>
      <h3 className='register__regText'><a className='register__regText-link' href="/signin">Войти</a></h3>
    </div>
      </div>  
    );
}

export default Register;