import "./NotFound.css"
import { Link } from "react-router-dom";


const NotFound = () => {
    return (
        <div class="notFound">

        <div class="notFound-text">

          <h2 class="notFound-text__title">404</h2>
          <p class="notFound-text__subtitle">Страница не найдена</p>

        </div>
  
        <Link to="/" class="notFound-linkBack">Назад</Link>
        
      </div>
    );
}


export default NotFound;