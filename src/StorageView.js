import React from 'react'


const Items = (props) => {

  let itemsFiltered = []

  for (const id in props.items) {
    if (props.filter === props.items[id].category || props.filter === 'all'){
      itemsFiltered.push(props.items[id])
    }
  }

  let items

  if (itemsFiltered.length < 1) {
    items = <h2>No products on this category</h2>
  } else {
    items = itemsFiltered.map((item, index) => {
      return (
        <div className={ `product-preview ${(item.stock === 0) ? "no-stock" : "" } ` } key={item.id} onClick={() => props.selectItem(item.id)}>
          <h1>{item.name}</h1>
          <h6>on stock: {item.stock}</h6>
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

function StorageView (props) {
  let content
  if (Object.keys(props.items).length > 0){
    content = <Items items={props.items} selectItem={props.selectItem} filter={props.filter}/>
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


export default StorageView