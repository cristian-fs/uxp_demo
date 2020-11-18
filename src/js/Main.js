import React, { Component } from "react";
import fire from "../config/fire";
import '../css/App.css';

class Main extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
            email: "",
            password: ""
        }
    }
    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            console.log(u)
        }).catch((err) => {
            console.log(err);
        })
    }
    signup(e) {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            console.log(u)
        }).catch((err) => {
            console.log(err);
        })
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    



    

render() {
    return (
        <div>
            <nav>
                <div className="nav-wrapper black">
                    <img className="logostyle" src={require('../img/logo.png')} />


                    <ul id="nav-mobile" className="right grey ">
                        <li><a className="modal-trigger waves-effect btn-flat" href="#loginmod">ACCESO CLIENTES</a></li>
                    </ul>
                </div>


                <div id="loginmod" className="modal">
                    <div className="modal-content">
                        <h4>INICIAR SESION</h4>

                        <div className="row">
                            <form className="col s12">


                                <div className="row">
                                    <div className="input-field col s6">
                                        <input id="email" type="email" className="validate"
                                        name="email"
                                        onChange={this.handleChange}
                                        value={this.state.email} />
                                        <label htmlFor="email">E-mail</label>
                                    </div>
                                </div>



                                <div className="row">
                                    <div className="input-field col s6">
                                        <input id="password" type="password" className="validate"
                                                    name="password"
                                                    value={this.state.password}
                                                    onChange={this.handleChange} />
                                        <label htmlFor="password">Contraseña</label>
                                    </div>
                                </div>



                            </form>
                        </div>





                    </div>
                    <div className="modal-footer">
                        <a href="#!" className="modal-close waves-effect waves-green btn-flat"
                        onClick={this.login}
                        >Agree</a>
                    </div>
                </div>
            </nav>


{/*
            <div className="container carouselback">

                <div className="carousel carousel-slider center cont">

                    <div className="carousel-item  white-text cont" href="#one!">
                        <h1>First Panelllll</h1>
                        <p className="white-text">This is your first panel</p>
                    </div>

                    <div className="carousel-item  white-text" href="#two!">
                        <h2>Second Panel</h2>
                        <p className="white-text">This is your second panel</p>
                    </div>

                    <div className="carousel-item  white-text" href="#three!">
                        <h2>Third Panel</h2>
                        <p className="white-text">This is your third panel</p>
                    </div>

                </div>
            </div>

*/}

        </div>









    )
}
}
export default Main;


