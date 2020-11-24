import React, { Component } from "react";
//import '../css/App.css';
//import fire from "../config/fire";
import Main from "../componentes/Main";
import Contenedor from "../componentes/Contenedor";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import crearMainStore from "../REDUX/Store";
import { Provider } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  /* componentDidMount() {
    this.authListener();
  }  */

  /*authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        
      }
      else {
        
      }
    })
  }*/

  render() {
    const mainStore = crearMainStore();

    return (
      <>
        <Provider store={mainStore}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/home" component={Contenedor} />
            </Switch>
          </BrowserRouter>
        </Provider>
      </>
    );
  }
}

export default App;
