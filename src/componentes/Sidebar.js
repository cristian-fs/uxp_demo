import React from 'react'
import { useDispatch } from 'react-redux'
import {obtenerPedidosAcx} from '../REDUX/Ducks'
import { withRouter } from "react-router-dom";
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    Drawer,
} from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AssignmentRoundedIcon from '@material-ui/icons/AssignmentRounded';
import BallotRoundedIcon from '@material-ui/icons/BallotRounded';
import CalendarTodayRoundedIcon from '@material-ui/icons/CalendarTodayRounded';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';
import PollRoundedIcon from '@material-ui/icons/PollRounded';
/* import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";*/

const drawerWidth = 240

const estilos = makeStyles(theme => ({

    toolbar: theme.mixins.toolbar,

    drawerPaper: {
        width: drawerWidth,
    },

}))




const Sidebar = (props) => {

    const { history } = props;
    const { window } = props;
    const theme = useTheme();
    const classes = estilos();
    const container = window !== undefined ? () => window().document.body : undefined;   // nose que es esto

    const usDpx = useDispatch()

    function handleclick() {



        usDpx(obtenerPedidosAcx());

        history.push('/');




    } 



    const drawerList = (

        <div>
            <div className={classes.toolbar} />
            <Divider />
            <List>



                <ListItem button key='Indicadores' onClick={() => history.push('/indicadores')}>
                    <ListItemIcon><PollRoundedIcon /></ListItemIcon>
                    <ListItemText primary={'Indicadores'} />
                </ListItem>

                <ListItem button key='Pedidos' onClick={() => history.push('/')}>
                    <ListItemIcon><AssignmentRoundedIcon /></ListItemIcon>
                    <ListItemText primary={'Pedidos'} />
                </ListItem>

                <ListItem button key='Liquidaciones' onClick={handleclick}>
                    <ListItemIcon><CalendarTodayRoundedIcon /></ListItemIcon>
                    <ListItemText primary={'Liquidaciones'} />
                </ListItem>

                <ListItem button key='Facturas' onClick={() => history.push('/facturas')}>
                    <ListItemIcon><BallotRoundedIcon /></ListItemIcon>
                    <ListItemText primary={'Facturas'} />
                </ListItem>

            </List>
            <Divider />
            <List>
                <ListItem button key='Ayuda'>
                    <ListItemIcon><HelpRoundedIcon /></ListItemIcon>
                    <ListItemText primary={'Ayuda'} />
                </ListItem>


            </List>
        </div>

    )





    return (

        <Drawer
            container={container}
            variant={props.variant}
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}      //porque aca no se mete directamente el valor rigth o left?   impuro?
            open={props.open}
            onClose={props.onClose ? props.onClose : null}  //si hay "algo" que onClose = "algo", sino  nulo  (nada)  es por si no lo definimos cuando instanciamos no pasa nada
            classes={{
                paper: classes.drawerPaper,
            }}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
        >
            {drawerList}
        </Drawer>
    )
}

export default withRouter(Sidebar);