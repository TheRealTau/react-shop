import React from 'react'


function ConfirmationModal (props) {

  const showHideClassName = props.show ? "modal display-block" : "modal display-none";

  const handleDelete = () => {
    props.hideModal()
    props.delete(props.id)
  }

  return (
    <div className={showHideClassName}>
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
    </div>
  )
}


export default ConfirmationModal