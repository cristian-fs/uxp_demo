import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DataGrid } from '@material-ui/data-grid'
//import { obtenerPedidosAcx } from '../redux/Ducks'


const Pedidos = () => {

    
    const pedidosQry = useSelector(store => store.pedidos.pedidos)



    const columns = [
        { field: 'id', headerName: 'NUMERO PEDIDO', width: 150 },
        { field: 'PD_fecha', headerName: 'ZONA', width: 130 },
        { field: 'PD_paq', headerName: 'PAQUETES', width: 130 },
       {
          field: 'PD_precio',
          headerName: 'PRECIO',
          type: 'number',       
          width: 90,
        },
    
      ];

      const rows = pedidosQry

    return (
        <div>
    
        <h1>PEDIDOS</h1> 
        
       {/*} <ul>
        
            {
                pedidosQry.map(item => (
                    <li key={item.PD_fecha}>{item.PD_fecha}</li>
                ))
            }
        </ul>  */}

        <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={pedidosQry} columns={columns} pageSize={5}  />
    </div>
      
        </div>

    )
}


export default Pedidos