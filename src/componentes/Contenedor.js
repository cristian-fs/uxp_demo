import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { FirebaseAcx } from "../REDUX/Ducks";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
//import Typography from '@material-ui/core/Typography';
import Sidebar from "./Sidebar";
import Appbar from "./AppBar";
import Facturas from "./PAGEFacturas";
import Pedidos from "./PAGEPedidos";
import Indicadores from "./PAGEIndicadores";
import Recibos from "./PAGERecibos";
import MainTheme from "../config/TemaMain.js";

const drawerWidth = 240;

const estilos = makeStyles((theme) => ({
  //q onda hay un parentesis de mas aca?   (theme)
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
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
  const usDpx = useDispatch();
  const classes = estilos();
  const mes = "ENERO"
  const ano = "2020"
  const [abrir, setAbrir] = useState(false);
  const desplegar = () => {
    setAbrir(!abrir);
  };

  useEffect(() => {
    usDpx(FirebaseAcx(mes, ano));

    console.log("se ejecuto accion");
  });

  return (
    <div className={classes.root}>
      <CssBaseline />
      <ThemeProvider theme={MainTheme}>
        <Appbar desplegar={desplegar} />
        <BrowserRouter>
          <nav className={classes.drawer} aria-label="mailbox folders">
            <Hidden xsDown implementation="css">
              <Sidebar variant="permanent" open></Sidebar>
            </Hidden>

            <Hidden smUp implementation="css">
              <Sidebar
                variant="temporary"
                open={abrir}
                onClose={desplegar}
              ></Sidebar>
            </Hidden>
          </nav>
          <main className={classes.content}>
            <div className={classes.toolbar} />

            <Switch>
              <Route exact path="/home" component={Indicadores} />
              <Route exact path="/pedidos" component={Pedidos} />
              <Route exact path="/recibos" component={Recibos} />
              <Route exact path="/facturas" component={Facturas} />
              
            </Switch>
          </main>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

export default Contenedor;
