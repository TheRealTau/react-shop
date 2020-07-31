import React, {Component} from 'react'
import './App.css';
import itemsData from './itemsData'
import ProductList from './ProductList'
import ProductDetail from './ProductDetail'
import ShoppingList from './ShoppingList'
import Modal from './Modal'
import SelectCategory from './SelectCategory'

class App extends Component {

  defaultItem = {
    name: '',
    price: '',
    description: '',
    id: '',
    stock: 0,
  }

  state = {
    items : {},
    categories: [],
    filter: 'all',
    selected : '',
    kart: {},
    totalPrice: 0,
    totalItems: 0,
    modal: {
      show: false,
      action: '',
      defaultItem: this.defaultItem,
    }
  }

  searchItem(id) {
    return this.state.items[id]
  }

  handleSelection = (id) => {
    const item = this.searchItem(id)
  
    this.setState({selected: item})
  }

  addKartProduct = (id) => {
    let myItems = JSON.parse(JSON.stringify(this.state.items))
    myItems[id]['stock'] = +myItems[id]['stock'] - 1
    let kartItems = JSON.parse(JSON.stringify(this.state.kart))
    if (typeof(kartItems[id]) !== "undefined") {
      kartItems[id]['stock'] = +kartItems[id]['stock'] + 1
    } else {
      kartItems[id] = JSON.parse(JSON.stringify(myItems[id]))
      kartItems[id]['stock'] = 1
    }

    this.setState({items: JSON.parse(JSON.stringify(myItems))})
    this.setState({kart: JSON.parse(JSON.stringify(kartItems))})
    this.setState({totalPrice: this.state.totalPrice + +myItems[id].price})
    this.setState({totalItems: this.state.totalItems + 1})
    this.setState({selected: myItems[id]})
  }

  delKartProduct = (id) => {

    console.log('id', id)
    let myItems = JSON.parse(JSON.stringify(this.state.items))
    console.log('items state copy', myItems)
    myItems[id]['stock'] = +myItems[id]['stock'] + 1

    let kartItems = JSON.parse(JSON.stringify(this.state.kart))
    console.log('kart items', kartItems)
    if (+kartItems[id]['stock'] > 1) {
      console.log('Hay mas de uno')
      kartItems[id]['stock'] = +kartItems[id]['stock'] - 1
    } else {
      console.log('Solo hay uno')
      delete kartItems[id]
    }

    console.log('kart items', kartItems)
    console.log(myItems)

    this.setState({items: JSON.parse(JSON.stringify(myItems))})
    this.setState({kart: JSON.parse(JSON.stringify(kartItems))})
    this.setState({totalPrice: this.state.totalPrice - +myItems[id].price})
    this.setState({totalItems: this.state.totalItems - 1})
    this.setState({selected: myItems[id]})
  }

  showModal = (action, id=0) => {
    if (action === 'add'){
      this.setState({'modal': {show: true, action: action, defaultItem: this.defaultItem}})
      // console.log(this.state.modal)
    }
    if (action === 'edit'){
      const item = this.searchItem(id)
      this.setState({'modal': {show: true, action: action, defaultItem: item}})
      // console.log(this.state.modal)
    }
  }

  hideModal = () => {
    // console.log(this.state.modal)
    this.setState({'modal': {show: false,  action: '', defaultItem: this.defaultItem}})
  }

  onChange = (name, value) => {
    this.setState({modal: {defaultItem: {[name]: value}}})
  }

  setFilter = (category) => {
    this.setState({'filter': category})
  }

  addNewProduct = (item) => {
    // console.log(item)
    let items = this.state.items
    items[item.id] = item
    this.setState({items: items})
    this.setState({'modal': {show: false, action: '', defaultItem: this.defaultItem}})
  }

  updateProduct = (item) => { //This function should be improve
    let items = this.state.items
    items[item.id]= item
    this.setState({items: items})
    this.setState({'modal': {show: false, action:'', defaultItem: this.defaultItem}})
    this.setState({selected: item})
  }

  deleteProduct = (id) => {
    const items = this.state.items
    let newItems = {}
    for (const itemId in items) {
      if (+itemId !== +id){
        newItems[itemId] = items[itemId]
      }
    }
    this.setState({items: newItems})
    this.setState({selected: ''})
  }

  componentDidMount() {
    this.setState({items: itemsData})
    this.setState({categories: ['all', 'category1', 'category2', 'category3']})
  }

  render () {
    return (
      <div className="content-container">
        <div className="column-1">
          <SelectCategory categories={this.state.categories} setFilter={this.setFilter} itemsData={this.state.items}/>
          <ProductList itemsData={this.state.items} filter={this.state.filter} selectItem={this.handleSelection}/>
          <Modal categories={this.state.categories} addNewProduct={this.addNewProduct} updateProduct={this.updateProduct} showModal={this.showModal} hideModal={this.hideModal} modalData={this.state.modal} onChange={this.onChange}/>
        </div>
        <div className="column-2">
          <ProductDetail selected={this.state.selected} addKartProduct={this.addKartProduct} deleteProduct={this.deleteProduct} showModal={this.showModal} hideModal={this.hideModal}/>
          <ShoppingList items={this.state.kart} totalItems={this.state.totalItems} removeProduct={this.delKartProduct} totalPrice={this.state.totalPrice}/>
        </div>
      </div>
    );
  }
}

export default App;
