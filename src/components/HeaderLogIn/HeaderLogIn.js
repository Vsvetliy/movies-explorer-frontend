import "./HeaderLogIn.css"
import { Link } from "react-router-dom";
import headerLogoLogIn from "../../images/HeaderLogInLogo.svg"
import HeaderLogInLogo from "../../images/headerLogo.svg"
import NavigateLogoUser from "../../images/HeaderLogInLogo.svg"

function axctive() {
    document.getElementById("menu").classList.toggle("active")


    
}
const HeaderLogIn = () => {
    return (
        <header className = "HeaderLogIn">
                          
            <div className="HeaderLogIn-linkBox">
            <Link to="/">
                <img className="HeaderLogInLogo" src={HeaderLogInLogo} alt="Header logo" />
            </Link>
                <div className="HeaderLogIn-linkBox__list">
                    <Link to="/movies" className="HeaderLogIn-linkBox__list-link">Фильмы</Link>
                    <Link to="/saved-movies" className="HeaderLogIn-linkBox__list-link">Сохранённые фильмы</Link>
                </div>
                <Link to="/profile">
                    <img className="headerLogoLogIn" src={headerLogoLogIn} alt="Header logo" />
                </Link>
                <div
                 className="navigateLogoPolosochki"
                  onClick={() => {axctive()}}
                >
                    <input className="barCheck" type="checkbox"/>
                    <span className="barSpan" />
                </div>

                <div className="HeaderLogIn-navigate" id="menu">
                    
                    <div className="HeaderLogIn-navigate__box">
                        <Link to="/" className="HeaderLogIn-navigate__box__link">Главная</Link>
                        <Link to="/movies" className="HeaderLogIn-navigate__box__link">Фильмы</Link>
                        <Link to="/saved-movies" className="HeaderLogIn-navigate__box__link">Сохранённые фильмы</Link>
                    </div>
                    <Link to="/profile">
                        <img className="NavigateLogo" src={NavigateLogoUser} alt="NavigateLogo" />
                    </Link>
                </div>
            </div>

        </header>
    );
}


export default HeaderLogIn;