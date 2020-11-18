import React, { Component } from "react";
import fire from "../config/fire";
import DataTable from "react-data-table-component";

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

        this.DataArray = {
            statefecha: "inicio_fecha",
            stateclienteid: "inicio_clienteid",

        }
        this.state = {
            statefecha: "",
            stateclienteid: "",

        }
    }
    logout() {
        fire.auth().signOut();

    }

    componentWillUnmount() {

        console.log("desmontado")
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

            datos.push(this.state);
            console.log('--DATOS--')
            console.log(datos)



        })



        /*  console.log('--DATOS  THIS--')
          console.log(this.datos)
 
 
          console.log('--DATA ARRAY--')
          console.log(this.DataArray)
         */
        console.log('--THIS STATE--');
        console.log(this.state);


    }



    render() {

        console.log('--DATPS---');
        console.log(datos);
        return (
            <div>
                <DataTable



                    columns={columnas}
                    data={datos}
                    title="tabla de pedidos"
                />
                <button onClick={this.logout}>Logout</button>
                <p> DATABIND </p>

            </div>
        )
    }
}



export default Home;