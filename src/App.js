import React, { Component } from 'react';
import axios from 'axios'
import Dashboard from './components/dashboard/Dashboard'
import Form from './components/form/Form'
import Header from './components/header/Header'


class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: []
    }
  }

  componentDidMount = () => {
    this.getIt()
  }

  getIt = () => {
    axios.get('/api/inventory').then(response => {
      this.setState({
        inventory: response.data
      })
    })
  }

  render() { 
    return (
      <div>

        <Header />
        <Dashboard id = {this.state.inventory.id} inventory = {this.state.inventory} getUpdatedInv = {this.getIt} />
        <Form getUpdatedInv = {this.getIt} /> 
        
      </div>
    );
  }
}
 
export default App;
