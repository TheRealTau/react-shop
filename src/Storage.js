import React from 'react'
import CategoryFilter from './CategoryFilter'
import StorageView from './StorageView'


function Storage (props) {
  const handleShowModal = () => {
    props.showModal('add')
  }

  return (
    <div className="storage">
      <div className="component-header storage-header">
        <h2>Storage</h2>
        <CategoryFilter categories={props.categories} setFilter={props.setFilter} productsNumber={props.productsNumber}/>
      </div>
      
      <StorageView items={props.items} filter={props.filter} selectItem={props.selectItem}/>
      
      <button className="add-button" onClick={handleShowModal}>Add new product</button>
    </div>
  )
}


export default Storage