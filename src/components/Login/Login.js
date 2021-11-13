import "./Login.css"
import logo from "../../images/logo.svg"

const Login = () => {
    return (
      <div className = "login">
                <div className = "login-top">
              <img className = "login-top__logo" src={logo} alt = "logo" />
              <h2 className = "login-top__text">Добро пожаловать!</h2>
            </div>
            <form className="login-form">
              <label for="name" className="login-form__label">
                {" "}
                Имя
              </label>   
              <input type="text" id="name" className="login-form__input" name="name" required></input>
              <label for="email" className="login-form__label">
                {" "}
                E-mail
              </label>
              <input type="email" id="email" className="login-form__input" name="email" required></input>
              <label for="password" className="login-form__label">
                Пароль
              </label>
              <input className="login-form__input" maxLength="20" minLength="2" id="password" name="password" required></input>
            </form>
            <button  type = "submit" name = "submit-button" className="login__submit-button">
              Зарегистрироваться
    </button>
    <div className='login__regText'>
      <h3 className='123'>Ещё не зарегистрированы? </h3>
      <h3 className='345'><a className='login__regText-link' href="/signup">Регистрация</a></h3>
    </div>
      </div>  
    );
}

export default Login;