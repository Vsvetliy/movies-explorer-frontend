import closeIcon from '../../images/close_icon.svg';
import "./popup/popup.css"

function InfoToolTip(props) {
  function closePopup() {
    props.onClose(props.regData)

  }



    return (
      <div className={`popup ${props.isOpen ? "popup_opened" : ''}  `}>
      <div className="popup__overlay"></div>
      <div className="popup__container-RegConfirm" name="popup__container-img">
        <button onClick={closePopup}  type="button" className="popup__close-button"><img src={closeIcon} alt="закрыть" className="popup__close-button-img" /></button>
        <img src={props.icon} alt="Сообщение" className="popup__RegConfirm-images" />
        <h3 className="popup__RegConfirm-text">{props.text}</h3>
      </div>
    </div>
    )
}
export default InfoToolTip 