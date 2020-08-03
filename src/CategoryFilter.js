import React from 'react'
import Form from 'react-bootstrap/Form'

function CategoryFilter (props) {

  let categories = []

  for (let i = 0; i < props.categories.length; i++) {
    categories.push(<option key={i}>{props.categories[i]}</option>)
  }

  const handleChange = (event) => {
    event.preventDefault()
    const {name, value} = event.target
    props.setFilter(value)
  }

  return (
    <Form>
      <Form.Group controlId="CategoryFilterForm">
        <Form.Label>Categories</Form.Label>
        <Form.Control as="select" defaultValue="all" onChange={handleChange} disabled={(props.productsNumber > 0) ? false : true}>
          {categories}
        </Form.Control>
      </Form.Group>
    </Form>
  )
}


export default CategoryFilter