import Promo from "../Promo/Promo"
import AboutProject from "../AboutProject/AboutProject"
import Techs from "../Techs/Techs"
import AboutMe from "../AboutMe/AboutMe"
import Portfolio from "../Portfolio/Portfolio"
import Footer from "../Footer/Footer"
import HeaderDefault from "../HeaderDefault/HeaderDefault"
import HeaderLogIn from "../HeaderLogIn/HeaderLogIn"

const Main = (props) => {
    return (
        <main className = "content">

{props.loggedIn ? <HeaderLogIn /> : <HeaderDefault />}

    
        
        <Promo />          
        <AboutProject />         
        <Techs />              
        <AboutMe />          
        <Portfolio /> 
        <Footer />
        </main>
    );
}


export default Main;