import React, {Component} from 'react'
import ConfirmationModal from './ConfirmationModal'


class ProductDetailView extends Component {
  constructor (props) {
    super(props)
    this.state = {show: false}
    this.handleShow = this.handleShow.bind(this)
    this.handleHide = this.handleHide.bind(this)
  }

  handleShow = () => {
    this.setState({show: true})
  }

  handleHide = () => {
    this.setState({show: false})
  }

  render (){
    if (this.props.selected) {
      return (
        <div className="product-detail">
          <div className="component-header">
            <h6>Product detail</h6>
            <div className="item-options">
              <button type="button" className="edit-button small-button" onClick={() => this.props.showModal('edit', this.props.selected.id)}>
                Edit
              </button>
              <button type="button" className="delete-button small-button" onClick={() => this.handleShow(this.props.selected.id)}>
                Delete
              </button> 
              <ConfirmationModal show={this.state.show} hideModal={this.handleHide} delete={this.props.deleteProduct} id={this.props.selected.id}/>
            </div>
          </div>
          <div className="detail-content">
            <div className="content-col-1 single-componen">
              <img></img>
            </div>
            <div className="content-col-2">
              <div className="product-content">
                <h4>{this.props.selected.name}</h4>
                <h6>Price: {this.props.selected.price}</h6>
                <h6>Id: {this.props.selected.id}</h6>
                <h6 className="product-price">On stock: {this.props.selected.stock}</h6>
              </div>
            </div>
          </div>
          <div className="detail-footer">
            <button type="button" className="add-button" onClick={() => this.props.addKartProduct(this.props.selected.id)} disabled={(this.props.selected.stock > 0) ? false : true}>
              Add to shopping list
            </button>
          </div>
        </div>
      )
    } else {
      return (
        <div className="product-detail">
          <div className="component-header">
            <h6>Product detail</h6>
          </div>
          <div className="detail-content">
            <div className="content-col-1 single-componen">
              <img></img>
            </div>
            <div className="content-col-2">
              <div className="product-content">
                <h4>No item selected from storage</h4>
              </div>
            </div>
          </div>
          <div className="detail-footer">
          </div>
        </div>
      )
    }
  }
}


export default ProductDetailView