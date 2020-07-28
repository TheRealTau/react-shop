import React, {Component} from 'react'


const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Product</th>
        <th>Price</th>
        <th>Remove</th>
      </tr>
    </thead>
  )
}

const TableBody = (props) => {
  
  const rows = props.items.map((item, index) => {
    return (
      <tr key={index}>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>
          <button onClick={() => props.removeItem(item.id)}>Remove</button>
        </td>
      </tr>
      
    )
  })

  return (<tbody>
    {rows}
    <TableFooter totalPrice={props.totalPrice}/>
  </tbody>)
}

const TableFooter = (props) => {
  return (
    <tr>
      <td>Total</td>
      <td>{props.totalPrice}</td>
      <td></td>
    </tr>
  )
}


const ShoppingList = (props) => {
  return (
    <div className="shopping-list">
      <table>
        <TableHeader />
        <TableBody items={props.items} totalPrice={props.totalPrice} removeItem={props.removeProduct} />
      </table>
    </div>
  )
}

export default ShoppingList