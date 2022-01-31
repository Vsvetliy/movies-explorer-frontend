import "./HeaderDefault.css"
import { Link } from "react-router-dom";
import headerLogo from "../../images/headerLogo.svg"


const HeaderDefault = () => {
    return (
        <header className = "HeaderDefault">
                          
            <div className="HeaderDefault-linkBox">
            <Link to="/">
                <img className="headerLogo" src={headerLogo} alt="Header logo" />
            </Link>
                <div className="HeaderDefault-linkBox__list">
                
                <Link to="/signup" className="HeaderDefault-linkBox__list-link">Регистрация</Link>
                
                <Link to="/signin">
                    <button  className="HeaderDefault-linkBox__buttom">Войти</button>
                </Link>
                </div>
               
            </div>

        </header>
    );
}


export default HeaderDefault;