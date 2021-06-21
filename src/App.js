import React, { Component } from 'react';
import './style.css';

const products = [
  { name: 'apple' },
  { name: 'orange' },
  { name: 'pineapple' },
  { name: 'guava' }
];

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      Products: [
        { name: 'apple', count: 0 },
        { name: 'orange', count: 0 },
        { name: 'grapes', count: 0 },
        { name: 'pine', count: 0 }
      ]
    };

    this.add = this.add.bind(this);
    this.delete = this.delete.bind(this);
    this.empty = this.empty.bind(this);
  }
  add(index) {
    const Products = [...this.state.Products];
    const obj = { ...Products[index] };
   
    obj.count = obj.count + 1;
    Products[index] = obj;
    this.setState({
      Products: Products
    });
  }

  delete(index) {
    const Products = [...this.state.Products];
    const obj = { ...Products[index] };
    
    if( obj.count>0){
       obj.count = obj.count - 1;
        Products[index] = obj;
        this.setState({
          Products: Products
    });
    }
   
    
  }

  
  empty(index) {
    const Products = [...this.state.Products];
    const obj = { ...Products[index] };
    
 
       obj.count = 0;
        Products[index] = obj;
        this.setState({
          Products: Products
    });
    
   
    
  }
  render() {
    const productlist = products.map((product, index) => {
      return (
        <div>
          <p>{product.name}</p>
          <button onClick={() => this.add(index)}>+</button>
          <button onClick={() => this.delete(index)}>-</button>
          <button onClick={() => this.empty(index)}>reset</button>
          {this.state.Products.map((p, i) => {
            if (index === i) {
              return <p>{p.count}</p>;
            }
          })}
        </div>
      );
    });
    return <div>{productlist}</div>;
  }
}
