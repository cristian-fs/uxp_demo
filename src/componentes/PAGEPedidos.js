import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from "@material-ui/data-grid";
import Typography from '@material-ui/core/Typography';
//import { obtenerPedidosAcx } from '../redux/Ducks'

const Pedidos = () => {
  const pedidosQry = useSelector((store) => store.fireStore.pedidos);

  const columnas = [
    { field: "id", headerName: "NUMERO DE PEDIDO", width: 150 },
    { field: "PD_fecha", headerName: "FECHA", width: 130 },
    { field: "PD_paq", headerName: "PAQUETES", width: 130 },
    { field: "PD_zona", headerName: "ZONA", width: 130 },
    { field: "PD_monto", headerName: "MONTO", width: 130 },
  ];

  const rows = pedidosQry;

  return (
    <div>
       <Typography component="h1" variant="h4">
                        PEDIDOS REALIZADOS
                    
                    </Typography>

      {/*} <ul>
        
            {
                pedidosQry.map(item => (
                    <li key={item.PD_fecha}>{item.PD_fecha}</li>
                ))
            }
        </ul>  */}

      <div style={{ height: 400, width: "100%" }}>
        <DataGrid rows={pedidosQry} columns={columnas} pageSize={5} />
      </div>
    </div>
  );
};

export default Pedidos;
