/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from "@material-ui/data-grid";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
//import { obtenerPedidosAcx } from '../redux/Ducks'





const estilos = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,

  title: {
    margin: theme.spacing(1)
  },

  
}));

const Pedidos = () => {
  
  const classes = estilos();
  const pedidosQry = useSelector((store) => store.fireStore.pedidos);

  const columnas = [
    { field: "id", headerName: "N° DE PEDIDO", width: 150 },
    { field: "PD_fecha", headerName: "FECHA", width: 130 },
    { field: "PD_paq", headerName: "PAQUETES", width: 130 },
    { field: "PD_zona", headerName: "ZONA", width: 130 },
    { field: "PD_monto", headerName: "MONTO", width: 130 },
  ];

  

  return (
    
    <div style={{ height: 400, width: "100%" }}>
        
       <Typography className={classes.title} component="h1" variant="h2">PEDIDOS REALIZADOS</Typography> 


  
        <DataGrid hideFooterSelectedRowCount rows={pedidosQry} columns={columnas} pageSize={5} />
      </div>
      
      

      
  );
};

export default Pedidos;
