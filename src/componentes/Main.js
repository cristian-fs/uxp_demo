/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import LogIn from "./LogIn";
import fire from "../config/fire";
import CssBaseline from "@material-ui/core/CssBaseline";
import MainTheme from "../config/TemaMain.js";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

class Main extends Component {
  constructor(props) {
    super(props);

    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    //this.signup = this.signup.bind(this);
    this.state = {
      email: "",
      password: "",
      openSnack: false,
      errMsg: ""
    };
  }

  login(e) {
    const { history } = this.props;

    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        console.log(u);
        history.push("/home");
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          openSnack: true,
          errMsj: err.message
        });
      });
  }


  /* signup(e) {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        console.log(u);
      })
      .catch((err) => {
        console.log(err);
      });
  }   */



  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    // <LogIn handleChange={this.handleChange} handleSubmit={this.login} msg = "hola"/>

    return (
      <div>
        <CssBaseline />
        <ThemeProvider theme={MainTheme}>

          <LogIn handleChange={this.handleChange} handleSubmit={this.login} />
          <Snackbar open={this.state.openSnack} autoHideDuration={3000} >
          <Alert elevation={6} variant="filled"  severity="error">
          {this.state.errMsj}
        </Alert>
      </Snackbar>
          
        </ThemeProvider>
      </div>
    );
  }
}
export default Main;
