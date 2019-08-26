import React, { Component } from 'react';
import axios from 'axios'
import './Form.css'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: '',
            product: '',
            price: 0
        }
    }

    handleImage = (val) => {
        this.setState({
            image: val
        })
    }

    handleProduct = (val) => {
        this.setState({
            product: val
        })
    }

    handlePrice = (val) => {
        this.setState({
            price: val
        })
    }

    handleAddToInventory = () => {
        const newInventory = {
            image: this.state.image,
            product: this.state.product,
            price: this.state.price
        }
    
        axios.post('/api/product', newInventory).then(response => {
            this.props.getUpdatedInv(response.data)
        })
    }

    handleCancel = () => {
        this.setState({image: ''})
        this.setState({product: ''})
        this.setState({price: 0})
    }

    render() { 
        return (
            <div className="green">
                <label>Image URL:</label>
                <input onChange={(e) => this.handleImage(e.target.value)} value={this.state.image}/>
                
                <label>Product Name:</label>
                <input onChange={(e) => this.handleProduct(e.target.value)} value={this.state.product}/>
                
                <label>Price:</label>
                <input onChange={(e) => this.handlePrice(e.target.value)} value={this.state.price}/>
                
                <button onClick={() => this.handleAddToInventory()}>Add to Inventory</button>
                <button onClick={() => this.handleCancel()}>Cancel</button>
            </div>
        );
    }
}
 
export default Form;