import "./Portfolio.css"
import strelka from "../../images/strelka.svg"

const Portfolio = () => {
    return (
      <section className="portfolio">
      <h2 className="portfolio-title">Портфолио</h2>
      <div className="portfolio-box">

        <div className="portfolio-box__section">
          <div className="portfolio-box__section-text">Статичный сайт</div>
          <a href="https://vsvetliy.github.io/russian-travel/" target="_blank" rel="noreferrer"><img className = "portfolio-box__section-icon"  src={strelka} alt="стрелка"></img></a>
        </div>
        
        <div className="portfolio-box__section portfolio-box__section_line">
          <div className="portfolio-box__section-text">Адаптивный сайт</div>
          <a href="https://vsvetliy.github.io/russian-travel/" target="_blank" rel="noreferrer"><img className = "portfolio-box__section-icon"  src={strelka} alt="стрелка"></img></a>
        </div>
        
        <div className="portfolio-box__section portfolio-box__section_line">
          <div className="portfolio-box__section-text">Одностраничное приложение</div>
          <a href="https://vsvetliy.github.io/russian-travel/" target="_blank" rel="noreferrer"><img className = "portfolio-box__section-icon"  src={strelka} alt="стрелка"></img></a>
        </div>

      </div>
    </section>
    );
}

export default Portfolio;