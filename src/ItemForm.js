import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class ItemForm extends Component {
  constructor(props) {
    super(props)
    this.state = props.defaultItem    
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
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
    console.log(this.state)
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

    let saveButton
    if (this.props.action === 'edit'){
      saveButton = <button className="edit-button" onClick={this.handleUpdate}>Update</button>
    } else{
      saveButton = <button className="add-button" onClick={this.handleAdd}>Save</button>
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
          <Row>
            <Col>
              <Form.Label>Categorie</Form.Label>
              <Form.Control as="select" name="category" id="category" onChange={this.handleCategory}>
                {categories}
              </Form.Control>
            </Col>
            <Col>
              <Form.Label>Stock</Form.Label>
              <Form.Control type="number" placeholder="0" name="stock" id="stock" value={this.state.stock} onChange={this.handleChange}/>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Product description" name="description" id="description" value={this.state.description} onChange={this.handleChange}/>
        </Form.Group>
        <Form.Group>
          <button className="delete-button" onClick={this.props.hideModal}>Close</button>
          {saveButton}
        </Form.Group>
      </Form>
    )
  }
}


export default ItemForm