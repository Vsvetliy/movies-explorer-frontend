import "./Promo.css"

import promoLogo from "../../images/promoLogo.svg"

const Promo = () => {
    return (
      <div className = "promo">
          <div className="promo-content">
            <div className="promo-text">
                <h1 className="promo-text__title">Учебный проект студента факультета Веб-разработки.</h1>
                <p className="promo-text__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
            </div>
            <div className="promo-logo__box">
                 <img className="promo-logo" src={promoLogo} alt="Promo logo" />
            </div>
          </div>

          <div className = "promo-link"><a href="#about-project" className="promo-link__text">Узнать больше</a></div>

      </div>  
    );
}

export default Promo;