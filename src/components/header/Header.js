import React, { Component } from 'react';
import './Header.css'


class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (
            <div>
                <header>SHELFIE</header>
                <button>Dashboard</button>
                <button>Add Inventory</button>
            </div>
        );
    }
}
 
export default Header;