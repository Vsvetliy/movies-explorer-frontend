import "./Footer.css"




const Footer = () => {
    return (
        <footer className = "footer">
            
            <h4 className="footer-title">Учебный проект Яндекс.Практикум х BeatFilm.</h4>
      
      <div className="footer-linkBox">

        <div className="footer-linkBox__year">© 2020</div>

        <ul className="footer-linkBox__list">

          <li><a  className="footer-linkBox__list-link" rel = "noreferrer"  href="https://practicum.yandex.ru" target="_blank" >Яндекс.Практикум</a></li>
          <li><a  className="footer-linkBox__list-link" rel = "noreferrer"  href="https://practicum.yandex.ru" target="_blank">Github</a></li>
          <li><a  className="footer-linkBox__list-link" rel = "noreferrer"  href="https://practicum.yandex.ru" target="_blank">Facebook</a></li>
        </ul>
        
      </div>

        </footer>
    );
}


export default Footer;