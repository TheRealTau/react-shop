import React, {Component} from 'react'


const Items = (props) => {

  let itemsList = []

  for (const id in props.itemsData) {
    itemsList.push(props.itemsData[id])
  }

  const items = itemsList.map((item, index) => {
    if (props.filter === item.category || props.filter === 'all'){
      return (
        <div className="product-preview" key={item.id} onClick={() => props.selectItem(item.id)}>
          <h1>{item.name}</h1>
        </div>
      )
    }
  })

  return (
    <div className="product-list">
      {items}
    </div>
  )
}

const ProductList = (props) => {
  return (
    <Items itemsData={props.itemsData} selectItem={props.selectItem} filter={props.filter}/>
  )
}



export default ProductList