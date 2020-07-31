import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


function SaveButton(props){
  if (props.action === 'add'){
    return <Button variant="success" onClick={props.handleAdd}>Save</Button>
  } if (props.action === 'edit'){
    return <Button variant="warning" onClick={props.handleUpdate}>Update</Button>
  } else {
    return <Button variant="primary">Nothing</Button>
  }
}

class MyForm extends Component {

  constructor(props) {
    super(props)
    this.state = props.defaultItem    
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState(this.props.defaultItem)
 }

  handleChange = (event) => {
    event.preventDefault()
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  handleAdd = () => {
    this.props.addNewProduct(this.state)
  }

  handleUpdate = () => {
    this.props.updateProduct(this.state)
  }

  handleCategory = (event) => {
    event.preventDefault()
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  render(){
    let categories = []
    for (let i = 0; i < this.props.categories.length; i++){
      if (this.props.categories[i] !== 'all'){
        categories.push(<option key={i}>{this.props.categories[i]}</option>)
      }  
    }

    return (
      <Form>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Product name" name="name" id="name" value={this.state.name} onChange={this.handleChange}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Id</Form.Label>
          <Form.Control type="number" placeholder="Product Id" name="id" id="id" value={this.state.id} onChange={this.handleChange}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Categorie</Form.Label>
          <Form.Control as="select" name="category" id="category" onChange={this.handleCategory}>
            {categories}
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Product description" name="description" id="description" value={this.state.description} onChange={this.handleChange}/>
        </Form.Group>
        <Form.Group>
          <Button variant="danger" onClick={this.props.hideModal}>Close</Button>
          <SaveButton action={this.props.action} handleAdd={this.handleAdd} handleUpdate={this.handleUpdate} />
        </Form.Group>
      </Form>
    )
  }
}


export default MyForm