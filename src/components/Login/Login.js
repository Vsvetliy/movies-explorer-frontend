import "./Login.css"
import logo from "../../images/logo.svg"

const Login = () => {
    return (
      <div className = "login">
                <div className = "login-top">
              <img className = "login-top__logo" src={logo} alt = "logo" />
              <h2 className = "login-top__text">Рады видеть!</h2>
            </div>
            <form className="login-form">
            
            <div className = "login-form__inputBox">
            <label for="email" className = "login-form__label">E-mail</label>
            <input value = "TextText" type="email" id="email" className = "login-form__input" name="email" required></input>
          </div>

          <div className = "login-form__inputBox"> 
            <label for="password" className = "login-form__label">Пароль</label>
            <input type = "password" value = "TextText" className = "login-form__input login-form__input_pass" maxLength="20" minLength="2" id="password" name="password" required></input>
          </div>

            </form>
            <button  type = "submit" name = "submit-button" className = "login-submit">Зарегистрироваться</button>
        <div className = "login-box">
          <h3 className = "login-box__text">Уже зарегистрированы? </h3>
          <a className = "login-box__link" href="/signin">Войти</a>
        </div>
      </div>  
    );
}

export default Login;