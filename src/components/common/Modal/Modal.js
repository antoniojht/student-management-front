/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import './modal.style.css';

function Modal({
  header, body, setIsOpen, navigate,
}) {
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">{header}</h5>
          </div>
          <button type="button" className="closeBtn" onClick={() => setIsOpen(false)} />
          <div className="modalContent">
            {body}
          </div>
          <div className="modalActions">
            <div className="actionsContainer">
              <button
                type="button"
                className="cancelBtn"
                onClick={() => { setIsOpen(false); navigate(); }}
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
