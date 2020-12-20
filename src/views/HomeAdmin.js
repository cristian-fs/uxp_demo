import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { FirebaseAcx } from "../REDUX/Ducks";
import { Route, Switch, BrowserRouter, withRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
//import Typography from '@material-ui/core/Typography';
import Sidebar from "../components/Sidebar";
import Appbar from "../components/AppBar";
import Facturas from "./Facturas";
import Pedidos from "./Pedidos";
import Indicadores from "./Indicadores";
import Recibos from "./Recibos";
import Ayuda from "./Ayuda";
import MainTheme from "../config/TemaMain.js";

const drawerWidth = 240;

const estilos = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("lg")]: {
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

const HomeAdmin = (props) => {
  const { history } = props;
  const usDpx = useDispatch();
  const classes = estilos();
  const mes = "ENERO";
  const ano = "2020";
  const [abrir, setAbrir] = useState(false);
  const desplegar = () => {
    //desplega SideBar
    setAbrir(!abrir);
  };

  function closeHome() {
    //Exit
    history.push("/");
  }

  useEffect(() => {
    //conecta a Firebase y recupera tablas  Pedidos-Facuras-Recibos
    usDpx(FirebaseAcx(mes, ano));
    console.log("se ejecuto accion  en contenedor");
  });

  return (
    <div className={classes.root}>
      <CssBaseline />
      <ThemeProvider theme={MainTheme}>
        <BrowserRouter>
          <Appbar desplegar={desplegar} closeHome={closeHome} />
          <nav className={classes.drawer} aria-label="mailbox folders">
            <Hidden mdDown implementation="css">
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
              <Route exact path="/ayuda" component={Ayuda} />
            </Switch>
          </main>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

export default withRouter(HomeAdmin);
