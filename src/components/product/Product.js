import React, {Component} from 'react';

class Product extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (
            <div>
                <img src={this.props.newInventory.image} alt = "shoes" />
                <p>{this.props.newInventory.product}</p>
                <p>{this.props.newInventory.price}</p>
                <button onClick = {() => this.props.delete(this.props.id)}>Delete</button>
                <button>Edit</button>
            </div>
        );
    }
}
 
export default Product;