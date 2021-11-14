import "./AboutMe.css"
import img from "../../images/studentPhoto.png"

const AboutMe = () => {
    return (
      <section className = "aboutMe">
        <h3 className = "aboutMe-title">Студент</h3>
        <div className = "aboutMe-content">

            <div className = "aboutMe-text">
                <h2 className = "aboutMe-name">Виталий</h2>
                <p className = "aboutMe-profession">Фронтенд-разработчик, 30 лет</p>
                <p className = "aboutMe-description">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
      и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                <ul className = "aboutMe-social">
                  <li className = "aboutMe-social__link">Facebook</li>
                  <li className = "aboutMe-social__link">Github</li>
                </ul>
            </div>

            <div className = "aboutMe-imageBox">
                 <img className = "aboutMe-img" src={img} alt="фото студента"></img>
            </div>

        </div>



      </section>  
    );
}

export default AboutMe;