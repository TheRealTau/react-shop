import React, { Component } from 'react'
import { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'


class ModalForm extends Component {

  constructor(props) {
    super(props);
    this.state = this.initialState

    this.handleChange = this.handleChange.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  initialState = {
    name: '',
    price: '',
    description: '',
    id: '',
    show: false
  }
  
  product = this.initialState

  handleChange = (event) => {
    event.preventDefault()
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleShow = () => this.setState({'show': true})
  handleClose = () => this.setState({'show': false})
  handleSave= () => {
    this.setState({'show': false})
    this.props.addNewProduct(this.state)
    this.setState(this.initialState)
  }

  render(){
    return (
      <div className="flex">
        <Button className="add-button" variant="success" onClick={this.handleShow}>
          Add new product
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add new product</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Product name" name="name" id="name" value={this.state.name} onChange={this.handleChange}/>
              </Form.Group>
              <Form.Group>
                <Form.Label>Id</Form.Label>
                <Form.Control type="text" placeholder="Product Id" name="id" id="id" value={this.state.id} onChange={this.handleChange}/>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={this.handleClose}>Close</Button>
            <Button variant="success" onClick={this.handleSave}>Save</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
  
}


export default ModalForm