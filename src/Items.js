import React from 'react'


function Items (props) {

  let filteredItems = []

  for (const id in props.items) {
    if (props.filter === props.items[id].category || props.filter === 'all'){
      filteredItems.push(props.items[id])
    }
  }

  let items

  if (filteredItems.length < 1) {
    items = <h2>No products on this category</h2>
  } else {
    items = filteredItems.map((item, index) => {
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


export default Items