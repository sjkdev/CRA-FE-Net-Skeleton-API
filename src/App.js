import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
// import API from './api'

 class App extends Component {
  state = {
    values: [],
    values2: []
  }


  componentDidMount() {
    axios.get('http://localhost:5000/api/values')
      .then((response) => {
        console.log(response);
        this.setState({
          values: response.data
        })
      })
      
  }
   // eslint-disable-next-line
  //  componentDidMount() {
  //    this.setState({
  //      values2: [
  //        { id: 1, Name: 'Value hcoidashvuo' },
  //        { id: 2, Name: 'Values jcopjfoavjnd' },
  //        { id: 3, Name: 'Values vdahruajfvr;a' }
  //      ]
  //    })
  //  }
   
  render() {
    return (
      <div>
        <h1 className="home">List CRA</h1>
        <h1>API list</h1>
        <ul>
          {this.state.values.map((value) => (
            <li key={value.id}>{value.name}</li>
          ))}

        </ul>
      </div>
    )
  }
}

export default App

