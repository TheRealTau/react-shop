import React, {Component} from 'react'


const Items = (props) => {

  const itemsData = props.itemsData

  const items = itemsData.map((item, index) => {
    return (
      <div className="product-preview" key={item.id} onClick={() => props.selectItem(item.id)}>
        <h1>{item.name}</h1>
      </div>
    )
  })

  return (
    <div className="product-list">
      {items}
    </div>
  )
}

const ProductList = (props) => {
  return (
    <Items itemsData={props.itemsData} selectItem={props.selectItem}/>
  )
}



export default ProductList