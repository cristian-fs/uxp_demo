import fire from "../config/fire";

const Zstate = {
  pedidos: [],
  facturas: [],
  clientes: [],
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

/////////////////////////////////////////////////////////////////////////////////////////////  TIPOS DE ACCIONES

const OBTENER_PEDIDOS = "OBTENER_PEDIDOS";
const OBTENER_FACTURAS = "OBTENER_FACTURAS";
const OBTENER_PERFIL = "OBTENER_PERFIL";

///////////////////////////////////////////////////////////////////////////////////////////////   ACCIONES

export const FirebaseAcx = () => async (dispatch, getState) => {
  try {
    const IdUsuario = fire.auth().currentUser.uid;

    const pdPath = fire.database().ref("MAINDATA/PEDIDOS");
    const pdQry = pdPath.orderByChild("PD_CL_fid").equalTo(IdUsuario);
    const fcPath = fire.database().ref("MAINDATA/FACTURAS2");
    const fcQry = fcPath.orderByChild("FC_CL_fid").equalTo(IdUsuario);

    const pd_paq = [];
    const fc_paq = [];

    await pdQry.once("value", (snapshot) => {
      console.log(snapshot);

      snapshot.forEach((data) => {
        pd_paq.push(data.val());
      });

      console.log(pd_paq);

      dispatch({
        type: OBTENER_PEDIDOS,
        payload: pd_paq,
      });
    });

    await fcQry.once("value", (snapshot) => {
      console.log(snapshot);

      snapshot.forEach((data) => {
        fc_paq.push(data.val());
      });

      console.log(fc_paq);

      dispatch({
        type: OBTENER_FACTURAS,
        payload: fc_paq,
      });
    });
  } catch (error) {
    console.log(error);
  }
};

// eslint-disable-next-line no-lone-blocks
{
  /* export const obtenerPedidosAcx = (qryPath) => (dispatch, getState) => {
  try {
   const IdUsuario = fire.auth().currentUser.uid;
    const bd = fire.database().ref(qryPath);
    
    const pedref = bd.orderByChild("PD_CL_fid").equalTo(IdUsuario);
    const paq = [];

    pedref.once("value", (snapshot) => {
      console.log(snapshot);

      snapshot.forEach((data) => {
        paq.push(data.val());

        
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
  }*/
}

export const obtenerPerfilAcx = () => (dispatch, getState) => {
  try {
    const IdUsuario = fire.auth().currentUser.uid;
    const bd = fire.database().ref().child("MAINDATA/CLIENTES");
    const pedref = bd.orderByChild("FC_CL_fid").equalTo(IdUsuario); /////// ACA VER (PORQUE NO ES CHILD)
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
