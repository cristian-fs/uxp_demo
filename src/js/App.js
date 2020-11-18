import React, { Component } from 'react';
import '../css/App.css';
import fire from '../config/fire';
import Main from '../componentes/Main';
import Home from '../componentes/Home';
import Contenedor from '../componentes/Contenedor';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
  }


  componentDidMount() {
    this.authListener();
  }


  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user })
      }
      else {
        this.setState({ user: null })
      }
    })
  }






  /* {this.state.user ? (<Home/>) : (<Main/>)} */

  render() {

    return (
      <>
        {this.state.user ? (<Contenedor />) : (<Main/>)} 
        
        
      </>
    );
  }
}

export default App;