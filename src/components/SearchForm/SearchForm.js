import "./SearchForm.css"
import searchIcon from "../../images/searchIcon.svg"
import searchBtnIcon from "../../images/searchBtnIcon.svg"
import React from 'react'

const SearchForm = (props) => {
    const inputName = React.createRef();
    const inputcheckbox = React.createRef();
    function handleSubmit(e) {
        e.preventDefault();
            if(inputName.current.value.length === 0 ) {
                return
            }
        props.KnopkaPoisk({
            name: inputName.current.value,
            check: inputcheckbox.current.checked
          });
      }

      

    return (
        <div className = "searchForm">

        <div className = "searchFormBox">
            <div className = "searchFormBox-iputBox">
                <img className = "searchFormBox-iputBox-icon"  src={searchIcon} alt="стрелка"></img>
                <input ref={inputName}  name = "name" required placeholder="Фильм" className = "searchFormBox-iputBox-input"></input>
                <button onClick =  {handleSubmit} className = "searchFormBox-iputBox-button"><img className="searchFormBox-button-icon"  src={searchBtnIcon} alt="стрелка"></img></button>
            </div>
            <label className="checkbox">
                <input ref={inputcheckbox}  name = "name" type="checkbox" />
                <div className="checkbox__text">Короткометражки</div>
            </label>


        </div>
    
    
    </div>
    );
}


export default SearchForm;