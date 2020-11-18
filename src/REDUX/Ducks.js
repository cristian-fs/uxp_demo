import fire from "../config/fire";

const Zstate = {

    pedidos: [                             // aca cambiar nombre
       /* { PD_fecha: 'cristian', edad: 35 },
        { PD_fecha: 'juan', edad: 33 },
        { PD_fecha: 'estela', edad: 70 }, */
    ]


}



const OBTENER_PEDIDOS = 'OBTENER_PEDIDOS'

///  agregar async  aca abajo

export const obtenerPedidosAcx = () => (dispatch, getState) => {

    try {

        const IdUsuario = fire.auth().currentUser.uid;
        const bd = fire.database().ref().child('MAINDATA/PEDIDOS')
        const pedref = bd.orderByChild("PD_CL_id").equalTo(IdUsuario)
        const paq = []

        pedref.once('value', (snapshot) => {


            console.log(snapshot)

            snapshot.forEach((data) => {

                paq.push(data.val())

                //  console.log(data.val())

                //  console.log('LOG' + data.val().PD_fecha)
            })
              


            console.log(paq)

            dispatch({
                type: OBTENER_PEDIDOS,
                payload: paq 
            })

        }
        )



        



    }
    catch (error) {
        console.log(error)
    }

}


export default function pedidosRdx(state = Zstate, action) {

    switch (action.type) {
        case OBTENER_PEDIDOS:
            return { ...state, pedidos: action.payload }
        default:
            return state
    }
}   