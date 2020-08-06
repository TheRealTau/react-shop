import React, { Component } from 'react'


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

  hideModal = (event) => {
    console.log('idemodal', this.state)
    this.props.hideModal(this.state)
  }

  render(){
    let categories = []
    for (let i = 0; i < this.props.categories.length; i++){
      if (this.props.categories[i] !== 'all'){
        categories.push(<option key={i}>{this.props.categories[i]}</option>)
      }  
    }

    let saveButton
    let idField
    if (this.props.action === 'edit'){
      saveButton = <button type="button" className="edit-button" onClick={this.handleUpdate}>Update</button>
      idField =  <input type="number" placeholder="Product Id" name="id" id="id" value={this.state.id} readOnly disabled/>
    } else{
      saveButton = <button type="button" className="add-button" onClick={this.handleAdd}>Save</button>
      idField =  <input type="number" placeholder="Product Id" name="id" id="id" value={this.state.id} onChange={this.handleChange}/>
    } 

    return (
      <form className="modal-form">
        <div className="form-row">
          <label>Name</label>
          <input type="text" placeholder="Product name" name="name" id="name" value={this.state.name} onChange={this.handleChange}/>
        </div>
        <div className="form-row">
          <label>Id</label>
          {idField}
        </div>
        <div className="form-row">
          <label>Categorie</label>
          <select name="category" id="category" onChange={this.handleCategory}>
            {categories}
          </select>
          <label>Stock</label>
          <input type="number" placeholder="0" name="stock" id="stock" value={this.state.stock} onChange={this.handleChange}/>
        </div>
        <div className="form-row">
          <label>Description</label>
          <input type="text" placeholder="Product description" name="description" id="description" value={this.state.description} onChange={this.handleChange}/>
        </div>
        <div className="modal-options">
          <button type="button" className="delete-button" onClick={this.hideModal}>Close</button>
          {saveButton}
        </div>
      </form>
    )
  }
}


export default ItemForm