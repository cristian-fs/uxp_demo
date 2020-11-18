import React, { Component } from "react";
import fire from "../config/fire";
import { Hidden } from "@material-ui/core";
/* import Content from "./Content"*/
import Appbar from "./AppBar"
import Sidebar from "./Sidebar"



const datos = [{ statefecha: "hola", stateclienteid: "holaid" }]
const columnas = [




    {
        name: 'FECHA DEL COMPROBANTE',
        selector: 'statefecha',
        sorteable: true
    },



    {
        name: 'NUMERO DE PEDIDO',
        selector: 'stateclienteid',
        sorteable: true
    }
]



class Home extends React.Component {
    constructor() {
        super()


        this.state = {
            statefecha: "",
            stateclienteid: "",
        }
    }



    logout() {
        fire.auth().signOut();
    }

   



    componentDidMount() {

        const IdUsuario = fire.auth().currentUser.uid;
        const bd = fire.database().ref().child('MAINDATA/PEDIDOS')
        const pedref = bd.orderByChild("PD_CL_id").equalTo(IdUsuario)


        pedref.once('value', (snapshot) => {




            snapshot.forEach((data) => {


                this.setState({


                    statefecha: data.val().PD_fecha,
                    stateclienteid: data.val().PD_CL_id





                })











            })




        })





    }

    /*<Sidebar 
                    variant= "temporary"
                    open= {true} 
                    /> */

    render() {

        return (
            <>

            
                <Appbar />

                <Hidden xsDown implementation="css">

                    <Sidebar
                        variant="temporary"
                        open={true}
                    />

                </Hidden>
                <Hidden smUp implementation="css">

                    <Sidebar
                        variant="temporary"
                        open={true}
                    />

                </Hidden>






            </>
        )
    }
}



export default Home;