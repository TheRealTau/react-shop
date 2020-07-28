import React, {Component} from 'react'


function ItemOptions(props) {
  return (
    <div className="item-options">
      <button type="button" onClick={() => props.addProduct(props.product.id)}>Add to shopping list</button>
      <button type="button">Edit product</button>
    </div>
  )
}

function ProductDetail (props) {
  const selected = props.selected

  if (selected) {
    return (
      <div className="product-detail">
        <h1>Product detail:</h1>
        <h2>Name: {selected.name}</h2>
        <h2>Id: {selected.id}</h2>
        <ItemOptions addProduct={props.addProduct} product={props.selected}/>
      </div>
    )
  } else {
    return (
      <div className="product-detail">
        <h1>Product detail:</h1>
        <h2>No product selected</h2>
      </div>
    )
  }
}



export default ProductDetail