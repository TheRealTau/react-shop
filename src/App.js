import React, {Component} from 'react'
import './App.css';
import itemsData from './itemsData'
import ProductList from './ProductList'
import ProductDetail from './ProductDetail'
import ShoppingList from './ShoppingList'
import Modal from './Modal'

class App extends Component {

  state = {
    items : [],
    selected : '',
    kart: [],
    totalPrice: 0
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

  addNewProduct = (item) => {
    console.log(item)
    // const item = this.searchItem(id)

    this.setState({items: [...this.state.items, item]})
    // this.setState({totalPrice: this.state.totalPrice + +item.price})
  }

  componentDidMount() {
    this.setState({items: itemsData})
  }

  render () {
    return (
      <div className="content-container">
        <div className="column-1">
          <ProductList itemsData={this.state.items} selectItem={this.handleSelection} />
          <Modal addNewProduct={this.addNewProduct}/>
        </div>
        <div className="column-2">
          <ProductDetail selected={this.state.selected} addProduct={this.addKartProduct} />
          <ShoppingList items={this.state.kart} removeProduct={this.delKartProduct} totalPrice={this.state.totalPrice}/>
        </div>
      </div>
    );
  }
}

export default App;
