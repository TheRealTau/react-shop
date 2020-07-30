import React, {Component} from 'react'
import Form from 'react-bootstrap/Form'

function SelectCategory (props) {

  let categories = []

  for (let i = 0; i < props.categories.length; i++) {
    categories.push(<option key={i}>{props.categories[i]}</option>)
  }

  function handleChange (event) {
    event.preventDefault()
    const {name, value} = event.target
    props.setFilter(value)
    console.log(value)
  }

  return (
    <Form>
      <Form.Group controlId="FormControlSelectCategory">
        <Form.Label>Categorie</Form.Label>
        <Form.Control as="select" defaultValue="all" onChange={handleChange}>
          {categories}
        </Form.Control>
      </Form.Group>
    </Form>
  )
}



export default SelectCategory