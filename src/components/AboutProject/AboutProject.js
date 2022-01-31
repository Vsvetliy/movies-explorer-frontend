import "./AboutProject.css"


const AboutProject = () => {
    return (
      <section className = "aboutProject">
        <h3 className = "aboutProject-title">О проекте</h3>
        <div className="aboutProject-info">

          <div className="aboutProject-info__column">
            <h4 className="aboutProject-info__header">Дипломный проект включал 5 этапов</h4>
            <p className="aboutProject-info__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>

          <div className="aboutProject-info__column">
            <h4 className="aboutProject-info__header">На выполнение диплома ушло 5 недель</h4>
            <p className="aboutProject-info__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>

        </div>
        
        <div className="progressWeek">

          <div className="progressWeek-item progressWeek-item_active">
            <div className="progressWeek-item__section progressWeek-item__section_active">1 неделя</div>
            <p className="progressWeek-item__subtitle">Back-end</p>
          </div>

          <div className="progressWeek-item">
            <div className="progressWeek-item__section progressWeek-item__section_textColor">4 недели</div>
            <p className="progressWeek-item__subtitle">Front-end</p>
          </div>

        </div>

      </section>  
    );
}

export default AboutProject;