import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DataGrid } from '@material-ui/data-grid'
import Typography from '@material-ui/core/Typography';
//import { obtenerPedidosAcx } from '../redux/Ducks'


const Facturas = () => {

    
    const facturasQry = useSelector(store => store.fireStore.facturas)



    const columnas = [
        { field: 'id', headerName: 'NUMERO DE FACTURA', width: 150 },
        { field: 'FC_fecha', headerName: 'FECHA', width: 130 },
        { field: 'FC_tipo', headerName: 'TIPO', width: 130 },
        { field: 'FC_monto', headerName: 'MONTO', width: 130 },
        { field: 'FC_estado', headerName: 'ESTADO', width: 130 }   
      ];

      const rows = facturasQry

    return (
      <div>
         <Typography component="h1" variant="h4">
                        FACTURAS
                    
                    </Typography>

        {/*} <ul>
        
            {
                pedidosQry.map(item => (
                    <li key={item.PD_fecha}>{item.PD_fecha}</li>
                ))
            }
        </ul>  */}

        <div style={{ height: 300, width: "100%" }}>
          <DataGrid rows={facturasQry} columns={columnas} pageSize={3} />
        </div>
      </div>
    );
}




export default Facturas