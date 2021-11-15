import "./SearchForm.css"
import Promo from "../Promo/Promo"
import AboutProject from "../AboutProject/AboutProject"
import Techs from "../Techs/Techs"
import AboutMe from "../AboutMe/AboutMe"
import searchIcon from "../../images/searchIcon.svg"

const SearchForm = () => {
    return (
        <div className = "searchForm">
            <div className = "searchFormBox">
                <div className = "searchFormBox-iputBox">
                    <img className = "searchFormBox-iputBox-icon"  src={searchIcon} alt="стрелка"></img>
                    <input className = "searchFormBox-iputBox-input"></input>
                    <button className = "searchFormBox-iputBox-button"></button>
                </div>

                <div className = "searchFormBox-checkBox">
                    <input type="checkbox" className ="checkbox" id="checkbox" />
                    <label for="checkbox">Короткометражки</label>
                </div>


            </div>


        </div>
    );
}


export default SearchForm;