import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import MyForm from './Form'

class ModalForm extends Component {

  constructor(props) {
    super(props)
    this.state = props.modalData.defaultItem  }

  componentDidMount() {
    this.setState(this.props.modalData.defaultItem)
 }

  handleShowModal = () => {
    this.props.showModal('add')
  }

  render(){
    return (
      <div className="flex">
        <Button className="add-button" variant="success" onClick={this.handleShowModal}>
          Add new product
        </Button>
        <Modal show={this.props.modalData.show} onHide={this.props.hideModal}>
          <Modal.Header closeButton>
            <Modal.Title>{(this.props.modalData.action === 'edit') ? 'Edit product' : 'Add new product'}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <MyForm categories={this.props.categories} action={this.props.modalData.action} defaultItem={this.props.modalData.defaultItem} addNewProduct={this.props.addNewProduct} updateProduct={this.props.updateProduct} hideModal={this.props.hideModal}/>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}


export default ModalForm