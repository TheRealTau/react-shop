import React, {Component} from 'react'
import './App.css';
import itemsData from './itemsData'
import ProductList from './ProductList'
import ProductDetail from './ProductDetail'
import ShoppingList from './ShoppingList'
import Modal from './Modal'

class App extends Component {

  defaultItem = {
    name: '',
    price: '',
    description: '',
    id: '',
  }

  state = {
    items : [],
    selected : '',
    kart: [],
    totalPrice: 0,
    modal: {
      show: false,
      action: '',
      defaultItem: this.defaultItem
    }
  }

  searchItem(id) {
    let pass
    const item = this.state.items.filter((item, i) => {
      if (item.id === id) {
        pass = true;
      } else {
        pass = false;
      }
      return pass
    })
  
    return item[0]
  }

  handleSelection = (id) => {
    const item = this.searchItem(id)
  
    this.setState({selected: item})
  }

  addKartProduct = (id) => {
    const item = this.searchItem(id)

    this.setState({kart: [...this.state.kart, item]})
    this.setState({totalPrice: this.state.totalPrice + +item.price})
  }

  delKartProduct = (id) => {    
    this.setState({
      kart: this.state.kart.filter((item, i) => {
        let pass;
        if (item.id !== id) {
          pass = true;
        } else {
          this.setState({totalPrice: this.state.totalPrice - +item.price})
          pass = false;
        }
        return pass
      }),
    })
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

  addNewProduct = (item) => {
    // console.log(item)
    this.setState({items: [...this.state.items, item]})
    this.setState({'modal': {show: false, action: '', defaultItem: this.defaultItem}})
  }

  updateProduct = (item) => { //This function should be improve
    let index

    const oldItem = this.state.modal.defaultItem

    this.state.items.forEach(function (product, i) {
      if (product.id == oldItem.id) {
        index = i
      }
    })

    let allItems = [...this.state.items]
    allItems[index]=item

    this.setState({items: allItems})
    this.setState({'modal': {show: false, action:'', defaultItem: this.defaultItem}})
  }

  deleteProduct = (id) => {
    this.setState({
      items: this.state.items.filter((item, i) => {
        let pass;
        if (item.id !== id) {
          pass = true;
        } else {
          pass = false;
        }
        return pass
      }),
    })
  }

  componentDidMount() {
    this.setState({items: itemsData})
  }

  render () {
    return (
      <div className="content-container">
        <div className="column-1">
          <ProductList itemsData={this.state.items} selectItem={this.handleSelection} />
          <Modal addNewProduct={this.addNewProduct} updateProduct={this.updateProduct} showModal={this.showModal} hideModal={this.hideModal} modalData={this.state.modal} onChange={this.onChange}/>
        </div>
        <div className="column-2">
          <ProductDetail selected={this.state.selected} addKartProduct={this.addKartProduct} deleteProduct={this.deleteProduct} showModal={this.showModal} hideModal={this.hideModal}/>
          <ShoppingList items={this.state.kart} removeProduct={this.delKartProduct} totalPrice={this.state.totalPrice}/>
        </div>
      </div>
    );
  }
}

export default App;
