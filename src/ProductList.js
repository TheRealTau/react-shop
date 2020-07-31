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

function ProductList (props) {
  let content
  console.log(Object.keys(props.itemsData).length)
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