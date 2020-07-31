import React from 'react'
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
  }

  return (
    <Form>
      <Form.Group controlId="FormControlSelectCategory">
        <Form.Label>Categorie</Form.Label>
        <Form.Control as="select" defaultValue="all" onChange={handleChange} disabled={(Object.keys(props.itemsData).length > 0) ? false : true}>
          {categories}
        </Form.Control>
      </Form.Group>
    </Form>
  )
}


export default SelectCategory