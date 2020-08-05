import React from 'react'


const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Product</th>
        <th>Price</th>
        <th>Quantity</th>
        <th></th>
      </tr>
    </thead>
  )
}

const TableBody = (props) => {

  let itemsList = []
  console.log('itemsData', props)

  for (const id in props.items) {
    itemsList.push(props.items[id])
  }
  
  const rows = itemsList.map((item, index) => {
    return (
      <tr className="single-component" key={item.id}>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>{item.stock}</td>
        <td>
          <button className="delete-button" onClick={() => props.removeItem(item.id)}>Remove</button>
        </td>
      </tr>
    )
  })

  return (<tbody>
    {rows}
  </tbody>)
}

const ShoppingList = (props) => {
  return (
    <div className="shopping-list">
      <div className="component-header">
        <h6>Shopping list</h6>
      </div>
      <div className="shopping-body">
        <table>
          <TableHeader />
          <TableBody items={props.items} totalItems={props.totalItems} totalPrice={props.totalPrice} removeItem={props.removeProduct}/>
        </table>
      </div>
      <div className="shopping-footer">
        <h6>Total</h6>
        <h6>{props.totalPrice}</h6>
      </div>
    </div>
  )
}


export default ShoppingList