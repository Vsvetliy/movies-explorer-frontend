import "./HeaderDefault.css"
import { Link } from "react-router-dom";
import headerLogo from "../../images/headerLogo.svg"


const HeaderDefault = () => {
    return (
        <header className = "HeaderDefault">
                          
            <div className="HeaderDefault-linkBox">

                <img className="headerLogo" src={headerLogo} alt="Header logo" />
                <div className="HeaderDefault-linkBox__list">
                    <a rel = "noreferrer"  href="https://practicum.yandex.ru" target="_blank" className="HeaderDefault-linkBox__list-link">Яндекс.Практикум</a>
                    <Link to="/signin">
                    <button  className="HeaderDefault-linkBox__buttom">Войти</button>
                    </Link>
                </div>
               
            </div>

        </header>
    );
}


export default HeaderDefault;