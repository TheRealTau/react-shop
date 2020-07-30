import React, {Component} from 'react'
import Button from 'react-bootstrap/Button'

function ItemOptions(props) {
  return (
    <div className="item-options single-component">
      <Button variant="success" onClick={() => props.addKartProduct(props.product.id)}>
          Add to shopping list
      </Button>
      <Button variant="warning" onClick={() => props.showModal('edit', props.product.id)}>
          Edit
      </Button>
      <Button variant="danger" onClick={() => props.deleteProduct(props.product.id)}>
          Delete
      </Button> 
    </div>
  )
}

function ProductDetail (props) {
  const selected = props.selected

  if (selected) {
    return (
      <div className="product-detail">
        
        <h6 className="product-row-1">Product detail:</h6>
        <div className="product-row-2 single-component">
          <img></img>
          <div className="product-content">
            <h4 className="product-name">{selected.name}</h4>
            <h6 className="product-price">Price: {selected.price}</h6>
            <h6>Id: {selected.id}</h6>
            <h6 className="product-price">On stock: {selected.stock}</h6>
          </div>
        </div>
        <div className="product-row-3 single-component">
          <h6>{selected.description}</h6>
        </div>
        <ItemOptions addKartProduct={props.addKartProduct} deleteProduct={props.deleteProduct} product={props.selected} showModal={props.showModal}/>
      </div>
    )
  } else {
    return (
      <div className="product-detail product-row-4">
        <h6>Product detail:</h6>
        <h3>No product selected</h3>
      </div>
    )
  }
}



export default ProductDetail