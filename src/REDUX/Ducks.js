import fire from "../config/fire";

const Zstate = {
  pedidos: [],
  facturas: [],
  clientes: [],
};

/////////////////////////////////////////////////////////////////////////////////////////////  TIPOS DE ACCIONES

const OBTENER_PEDIDOS = "OBTENER_PEDIDOS";
const OBTENER_FACTURAS = "OBTENER_FACTURAS";
const OBTENER_PERFIL = "OBTENER_PERFIL";





///////////////////////////////////////////////////////////////////////////////////////////////   ACCIONES

///  agregar async  aca abajo

export const obtenerPedidosAcx = () => (dispatch, getState) => {
  try {
    const IdUsuario = fire.auth().currentUser.uid;
    const bd = fire.database().ref().child("MAINDATA/PEDIDOS");
    const pedref = bd.orderByChild("PD_CL_fid").equalTo(IdUsuario);
    const paq = [];

    pedref.once("value", (snapshot) => {
      console.log(snapshot);

      snapshot.forEach((data) => {
        paq.push(data.val());

        //  console.log(data.val())

        //  console.log('LOG' + data.val().PD_fecha)
      });

      console.log(paq);

      dispatch({
        type: OBTENER_PEDIDOS,
        payload: paq,
      });
    });
  } catch (error) {
    console.log(error);
  }
};






export const obtenerFacturasAcx = () => (dispatch, getState) => {
    try {
      const IdUsuario = fire.auth().currentUser.uid;
      const bd = fire.database().ref().child("MAINDATA/FACTURAS");
      const pedref = bd.orderByChild("FC_CL_fid").equalTo(IdUsuario);
      const paq = [];
  
      pedref.once("value", (snapshot) => {
        console.log(snapshot);
  
        snapshot.forEach((data) => {
          paq.push(data.val());
  
          //  console.log(data.val())
  
          //  console.log('LOG' + data.val().PD_fecha)
        });
  
        console.log(paq);
  
        dispatch({
          type: OBTENER_FACTURAS,
          payload: paq,
        });
      });
    } catch (error) {
      console.log(error);
    }
  };







  export const obtenerPerfilAcx = () => (dispatch, getState) => {
    try {
      const IdUsuario = fire.auth().currentUser.uid;
      const bd = fire.database().ref().child("MAINDATA/CLIENTES");
      const pedref = bd.orderByChild("FC_CL_fid").equalTo(IdUsuario);   /////// ACA VER (PORQUE NO ES CHILD)
      const paq = [];
  
      pedref.once("value", (snapshot) => {
        console.log(snapshot);
  
        snapshot.forEach((data) => {
          paq.push(data.val());
  
          //  console.log(data.val())
  
          //  console.log('LOG' + data.val().PD_fecha)
        });
  
        console.log(paq);
  
        dispatch({
          type: OBTENER_PERFIL,
          payload: paq,
        });
      });
    } catch (error) {
      console.log(error);
    }
  };
  


////////////////////////////////////////////////////////////////////////////////////////////////////////  REDUCERS

export default function firebaseRdx(state = Zstate, action) {
  switch (action.type) {

    case OBTENER_PEDIDOS:
      return { ...state, pedidos: action.payload };

    case OBTENER_FACTURAS:
      return { ...state, facturas: action.payload };

    case OBTENER_PERFIL:
      return { ...state, clientes: action.payload };

    default:
      return state;
  }
}
