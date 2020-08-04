import React from 'react'


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
    <form className="filter">
      <label  for="myFilter">Categories</label>
      <select id='myFilter' name='myFilter' defaultValue="all" onChange={handleChange} disabled={(props.productsNumber > 0) ? false : true}>
        {categories}
      </select>
    </form>
  )
}


export default CategoryFilter