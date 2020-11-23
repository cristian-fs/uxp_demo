/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from "@material-ui/data-grid";
import { Typography, Paper, Grid, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//import { obtenerPedidosAcx } from '../redux/Ducks'

const estilos = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,

  title: {
    margin: theme.spacing(1),
    color: "white",
    
  },

  titleContainer:{
    backgroundColor: theme.palette.secondary.light,
  },

  Table: {
    
  },
}));

const Facturas = () => {
  const classes = estilos();
  const facturasQry = useSelector((store) => store.fireStore.facturas);

  const columnas = [
    { field: "id", headerName: "N° DE FACTURA", width: 150 },
    { field: "FC_fecha", headerName: "FECHA", width: 130 },
    { field: "FC_tipo", headerName: "TIPO", width: 130 },
    { field: "FC_monto", headerName: "MONTO", width: 130 },
    { field: "FC_estado", headerName: "ESTADO", width: 130 },
  ];

  return (
    <div>
      <Grid>
        <Grid className= {classes.titleContainer} item component={Paper} elevation={12}>
          <Typography className={classes.title} component="h1" variant="h2">
            FACTURAS
          </Typography>
          </Grid>
          <Grid item component={Paper} elevation={12}>
          {/*} <ul>
        
        
            {
                pedidosQry.map(item => (
                    <li key={item.PD_fecha}>{item.PD_fecha}</li>
                ))
            }
        </ul>  */}

          <div style={{ height: 300, width: "100%" }}>
            <DataGrid
            className= {classes.Table}
              hideFooterSelectedRowCount
              rows={facturasQry}
              columns={columnas}
              pageSize={3}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Facturas;
