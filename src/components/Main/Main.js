import Promo from "../Promo/Promo"
import AboutProject from "../AboutProject/AboutProject"
import Techs from "../Techs/Techs"
import AboutMe from "../AboutMe/AboutMe"
import Portfolio from "../Portfolio/Portfolio"
import Footer from "../Footer/Footer"

const Main = () => {
    return (
        <main className = "content">
          <Promo />          {/*   <-- готов 100% */}
          <AboutProject />         {/*    <-- готов 100%   */}
           <Techs />              {/*    <-- готов 100%   */}
          <AboutMe />          {/*    <-- готов 100%   */}
         <Portfolio /> 
         <Footer />
        </main>
    );
}


export default Main;