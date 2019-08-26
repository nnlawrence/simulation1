import React, { Component } from 'react';
import Product from '../product/Product';
import axios from 'axios'

class Dashboard extends Component {
    constructor() {
        super();
    }

    handleDelete(id){
        axios.delete(`/api/product/${id}`).then(response => {
            this.props.getUpdatedInv(response.data)
        })
    }

    render() { 

        const mappedInventory = this.props.inventory.map((item, i) => {
            return(
                <Product key = {i} item = {item} invName = {item.name} invPrice = {item.price} invImg = {item.image} id = {item.id}  delete = {this.handleDeleteProduct} />
            )
        })

        return (
            <div>
                {mappedInventory}
            </div>
        );
    }
}
 
export default Dashboard;