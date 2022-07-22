/* eslint-disable jsx-a11y/control-has-associated-label */
function ModalContent({
  header, body, setIsOpen,
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
                onClick={() => { setIsOpen(false); }}
              >
                Ok
              </button>
              <button
                type="button"
                className="cancelBtn"
                onClick={() => { setIsOpen(false); }}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalContent;
