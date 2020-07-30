import React, {Component} from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'


const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Product</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Remove</th>
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
          <Button variant="danger" onClick={() => props.removeItem(item.id)}>Remove</Button>
        </td>
      </tr>
    )
  })

  return (<tbody>
    {rows}
    <TableFooter totalPrice={props.totalPrice} totalItems={props.totalItems}/>
  </tbody>)
}

const TableFooter = (props) => {
  return (
    <tr className="single-component">
      <td>Total</td>
      <td>{props.totalPrice}</td>
      <td>{props.totalItems}</td>
      <td></td>
    </tr>
  )
}


const ShoppingList = (props) => {
  return (
    <div className="shopping-list">
      <h6>Shopping list:</h6>
      <Table striped bordered hover>
        <TableHeader />
        <TableBody items={props.items} totalItems={props.totalItems} totalPrice={props.totalPrice} removeItem={props.removeProduct} totalPrice={props.totalPrice}/>
      </Table>
    </div>
  )
}

export default ShoppingList