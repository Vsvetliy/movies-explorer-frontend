import "./Footer.css"




const Footer = () => {
    return (
        <footer className = "footer">
            
            <h4 className="footer-title">Учебный проект Яндекс.Практикум х BeatFilm.</h4>
      
      <div className="footer-linkBox">

        <div className="footer-linkBox__year">© 2020</div>

        <ul className="footer-linkBox__list">

          <li className="footer-linkBox__list-link">Яндекс.Практикум</li>
          <li className="footer-linkBox__list-link">Github</li>
          <li className="footer-linkBox__list-link">Facebook</li>
        </ul>
        
      </div>

        </footer>
    );
}


export default Footer;