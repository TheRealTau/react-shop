import React from 'react'
import Button from 'react-bootstrap/Button'

function AddItem (props) {

  const handleShowModal = () => {
    props.showModal('add')
  }

  return (
      <Button className="add-button" variant="success" onClick={handleShowModal}>
        Add new product
      </Button>
  )
}


export default AddItem