import fire from "../config/fire";

const Zstate = {
  pedidos: [],
  facturas: [],
  clientes: [],
  recibos:[],
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

      case OBTENER_RECIBOS:
      return { ...state, recibos: action.payload };

      case OBTENER_INDICADORES:
      return { ...state, indicadores: action.payload };

    default:
      return state;
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////  TIPOS DE ACCIONES

const OBTENER_PEDIDOS = "OBTENER_PEDIDOS";
const OBTENER_FACTURAS = "OBTENER_FACTURAS";
const OBTENER_PERFIL = "OBTENER_PERFIL";
const OBTENER_RECIBOS = "OBTENER_RECIBOS";
const OBTENER_INDICADORES = "OBTENER_INDICADORES";

///////////////////////////////////////////////////////////////////////////////////////////////   ACCIONES

export const FirebaseAcx = (mes,ano) => async (dispatch, getState) => {
  try {
    const IdUsuario = fire.auth().currentUser.uid;

    const pdPath = fire.database().ref("MAINDATA/PEDIDOS/"+ ano + "/" + mes);
    const pdQry = pdPath.orderByChild("PD_CL_fid").equalTo(IdUsuario);
    
    const fcPath = fire.database().ref("MAINDATA/FACTURAS/"+ ano + "/" + mes);
    const fcQry = fcPath.orderByChild("FC_CL_fid").equalTo(IdUsuario);
    
    const rcPath = fire.database().ref("MAINDATA/RECIBOS/"+ ano + "/" + mes);
    const rcQry = rcPath.orderByChild("RC_CL_fid").equalTo(IdUsuario);
    
    const inPath = fire.database().ref("MAINDATA/INDICADORES/"+ ano + "/" + mes);
    const inQry = inPath.orderByChild("IN_CL_fid").equalTo(IdUsuario);
    
    const clPath = fire.database().ref("MAINDATA/FACTURAS/"+ ano + "/" + mes);
    const clQry = clPath.orderByChild("CL_fid").equalTo(IdUsuario);

    const pd_paq = [];
    const fc_paq = [];
    const rc_paq = [];
    const in_paq = [];
    const cl_paq = [];



    await pdQry.once("value", (snapshot) => {
      

      snapshot.forEach((data) => {
        pd_paq.push(data.val());
      });
      console.log("paq ped");
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
      console.log("paq fac");
      console.log(fc_paq);

      dispatch({
        type: OBTENER_FACTURAS,
        payload: fc_paq,
      });
    });
    
    await rcQry.once("value", (snapshot) => {
      console.log(snapshot);

      snapshot.forEach((data) => {
        rc_paq.push(data.val());
      });
      console.log("paq rec");
      console.log(rc_paq);

      dispatch({
        type: OBTENER_RECIBOS,
        payload: rc_paq,
      });
    });

    await inQry.once("value", (snapshot) => {
      console.log(snapshot);

      snapshot.forEach((data) => {
        in_paq.push(data.val());
      });
      console.log("paq ind");
      console.log(in_paq);

      dispatch({
        type: OBTENER_INDICADORES,
        payload: in_paq,
      });
    });

    await clQry.once("value", (snapshot) => {
      console.log(snapshot);

      snapshot.forEach((data) => {
        cl_paq.push(data.val());
      });
      console.log("paq cli");
      console.log(cl_paq);

      dispatch({
        type: OBTENER_PERFIL,
        payload: cl_paq,
      });
    });


  } 
  
  
  catch (error) {
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
