import React from 'react'
import ModalWrapper from './ModalWrapper'


function ConfirmationModal (props) {

  let showHideClassName = props.show ? "modal display-block" : "modal display-none";

  const handleDelete = () => {
    props.hideModal()
    props.delete(props.id)
  }

  return (
    <div className={showHideClassName}>
      <ModalWrapper hideModal={props.hideModal} show={props.show}>
        <div className="modal-main">
          <div className="modal-title">
            <h1 >Delete Item</h1>
          </div>
          <div className="modal-body">
            <h6>Are you sure you want to delete this item from storage?</h6>
          </div>
          <div className="modal-options">
            <button type="button" className="delete-button" onClick={props.hideModal}>Cancel</button>
            <button type="button" className="delete-button" onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </ModalWrapper>
    </div>
  )
}


export default ConfirmationModal