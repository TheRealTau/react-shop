import React, {Component} from 'react'
import './App.css';
import itemsData from './itemsData'
import ProductList from './ProductList'
import ProductDetail from './ProductDetail'
import ShoppingList from './ShoppingList'

class App extends Component {

  state = {
    items : [],
    selected : '',
    kart: []
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
  }

  delKartProduct = (id) => {    
    this.setState({
      kart: this.state.kart.filter((item, i) => {
        let pass;
        if (item.id !== id) {
          pass = true;
        } else {
          // this.setState({total: this.state.total - +item.price})
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
        </div>
        <div className="column-2">
          <ProductDetail selected={this.state.selected} addProduct={this.addKartProduct} />
          <ShoppingList items={this.state.kart} removeProduct={this.delKartProduct}/>
        </div>
      </div>
    );
  }
}

export default App;
