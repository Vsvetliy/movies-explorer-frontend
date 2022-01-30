import "./Techs.css"


const Techs = () => {
    return (
      <section className = "techs">
        <h3 className = "techs-title">Технологии</h3>

        <div className = "techsInfo">
          <h2 className="techsInfo-subtitle">7 технологий</h2>
          <p className="techsInfo-text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
          <ul className="techsInfo-list">
            <li className="techsInfo-list__item">HTML</li>
            <li className="techsInfo-list__item">CSS</li>
            <li className="techsInfo-list__item">JS</li>
            <li className="techsInfo-list__item">React</li>
            <li className="techsInfo-list__item">Git</li>
            <li className="techsInfo-list__item">Express.js</li>
            <li className="techsInfo-list__item">mongoDB</li>
          </ul>
        </div>
      </section>  
    );
}

export default Techs;