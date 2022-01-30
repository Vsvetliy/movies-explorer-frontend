import "./Profile.css"
import HeaderLogIn from "../HeaderLogIn/HeaderLogIn"

const Profile = () => {
    return (
      <div className = "profile">
          <HeaderLogIn/>     
              
        <h2 className = "profile-top__text">Привет, Виталий!</h2>
            
        <form className="profile-form">

          <div className="profile-form-name">
              <label htmlFor="name" className="profile-form__label">Имя</label>   
              <input defaultValue="Name Name"  type="text" id="name" className="profile-form__input" name="name" required></input>
          </div>   

          <div className="profile-form-email">
              <label htmlFor="email" className="profile-form__label">E-mail</label>
              <input defaultValue="email@email.ru"  type="email" id="email" className="profile-form__input" name="email" required></input>
            </div>                 
        </form>
           
        <div className='profile-buttonbox'>
          <h3 className='profile-buttonbox__reg'><a className='profile-buttonbox__reg__link' href="/signup">Редактировать</a></h3>
          <h3 className='profile-buttonbox__exit'><a className='profile-buttonbox__exit__link' href="/signup">Выйти из аккаунта</a></h3>
        </div>
      </div>  
    );
}

export default Profile;