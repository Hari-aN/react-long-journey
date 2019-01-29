import React, { Component } from 'react';
import './../App.css';
import Header from '../Layouts/Header';
import Footer from '../Layouts/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header/>
       <p> here will be the main business logic work of the application..</p>
       <Footer/>
      </div>
    );
  }
}

export default App;
