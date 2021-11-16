import "./SearchForm.css"




import searchIcon from "../../images/searchIcon.svg"
import searchBtnIcon from "../../images/searchBtnIcon.svg"

const SearchForm = () => {
    return (
        <div className = "searchForm">

        <div className = "searchFormBox">
            <div className = "searchFormBox-iputBox">
                <img className = "searchFormBox-iputBox-icon"  src={searchIcon} alt="стрелка"></img>
                <input placeholder="Фильм" className = "searchFormBox-iputBox-input"></input>
                <button className = "searchFormBox-iputBox-button"><img class = "searchFormBox-button-icon"  src={searchBtnIcon} alt="стрелка"></img></button>
            </div>
            <label className="checkbox">
                <input type="checkbox" />
                <div className="checkbox__text">Короткометражки</div>
            </label>


        </div>
    
    
    </div>
    );
}


export default SearchForm;