import React, { useState } from 'react';
import { Provider } from 'react-redux';
import crearMainStore from '../REDUX/Store'
import { Route, Switch, BrowserRouter } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
//import Typography from '@material-ui/core/Typography';
import Sidebar from './Sidebar';
import Appbar from './AppBar';
import Facturas from './PAGEFacturas';
import Pedidos from './PAGEPedidos'
import MainTheme from '../config/TemaMain.js'


const drawerWidth = 240



const estilos = makeStyles((theme) => ({   //q onda hay un parentesis de mas aca?   (theme)
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },

    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));






const Contenedor = () => {

    const mainStore = crearMainStore()
    const classes = estilos();
    const [abrir, setAbrir] = useState(false);
    const desplegar = () => {
        setAbrir(!abrir);
    };






    return (
        <div className={classes.root}>
            <CssBaseline />
            <ThemeProvider theme={MainTheme}>
                <Provider store={mainStore} >
                    <Appbar desplegar={desplegar} />
                    <BrowserRouter>

                        <nav className={classes.drawer} aria-label="mailbox folders">


                            <Hidden xsDown implementation="css">
                                <Sidebar
                                    variant="permanent"
                                    open
                                >

                                </Sidebar>
                            </Hidden>

                            <Hidden smUp implementation="css">
                                <Sidebar

                                    variant="temporary"
                                    open={abrir}
                                    onClose={desplegar}

                                >

                                </Sidebar>
                            </Hidden>

                        </nav>
                        <main className={classes.content}>



                            <div className={classes.toolbar} />



                            <Switch>
                                <Route exact path="/" component={Pedidos} />
                                <Route exact path="/Facturas" component={Facturas} />
                            </Switch>


                        </main>
                    </BrowserRouter>
                </Provider>
            </ThemeProvider>
        </div>




    )

}



export default Contenedor



