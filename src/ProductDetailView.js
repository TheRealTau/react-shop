import React from 'react'


function ProductDetailView (props) {
  const selected = props.selected

  if (selected) {
    return (
      <div className="product-detail">
        <div className="component-header">
          <h6>Product detail</h6>
          <div className="item-options">
            <button className="edit-button" onClick={() => props.showModal('edit', props.selected.id)}>
              Edit
            </button>
            <button className="delete-button" onClick={() => props.deleteProduct(props.selected.id)}>
              Delete
            </button> 
          </div>
        </div>
        <div className="detail-content">
          <div className="content-col-1 single-componen">
            <img></img>
          </div>
          <div className="content-col-2">
            <div className="product-content">
              <h4>{selected.name}</h4>
              <h6>Price: {selected.price}</h6>
              <h6>Id: {selected.id}</h6>
              <h6 className="product-price">On stock: {selected.stock}</h6>
            </div>
          </div>
        </div>
        <div className="detail-footer">
          <button className="add-button" onClick={() => props.addKartProduct(props.selected.id)} disabled={(props.selected.stock > 0) ? false : true}>
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


export default ProductDetailView