import React, {Component} from 'react'


const Items = (props) => {

  let itemsFiltered = []

  for (const id in props.itemsData) {
    if (props.filter === props.itemsData[id].category || props.filter === 'all'){
      itemsFiltered.push(props.itemsData[id])
    }
  }

  let items

  if (itemsFiltered.length < 1) {
    items = <h2>No products on this category</h2>
  } else {
    items = itemsFiltered.map((item, index) => {
      return (
        <div className="product-preview" key={item.id} onClick={() => props.selectItem(item.id)}>
          <h1>{item.name}</h1>
        </div>
      )
    })
  }

  return (
    <div className="product-list">
      {items}
    </div>
  )
}

function ProductList (props) {
  let content
  if (Object.keys(props.itemsData).length > 0){
    content = <Items itemsData={props.itemsData} selectItem={props.selectItem} filter={props.filter}/>
  } else {
    content = (
      <div className="product-list">
        <h2>No products on storage</h2>
      </div>
    )
  }
  return (
    content
  )
}


export default ProductList