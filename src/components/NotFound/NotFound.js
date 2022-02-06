import "./NotFound.css"
import { Link } from "react-router-dom";


const NotFound = () => {
    return (
        <div className="notFound">

        <div className="notFound-text">

          <h2 className="notFound-text__title">404</h2>
          <p className="notFound-text__subtitle">Страница не найдена</p>

        </div>
  
        <Link to="/" className="notFound-linkBack">Назад</Link>
        
      </div>
    );
}


export default NotFound;