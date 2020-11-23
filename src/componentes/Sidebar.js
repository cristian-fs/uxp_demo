import React from "react";
import { useDispatch } from "react-redux";
import { obtenerPedidosAcx, obtenerFacturasAcx, FirebaseAcx } from "../REDUX/Ducks";
import { withRouter } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Drawer,
  Paper,
  Grid,
  Card,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AssignmentRoundedIcon from "@material-ui/icons/AssignmentRounded";
import BallotRoundedIcon from "@material-ui/icons/BallotRounded";
import CalendarTodayRoundedIcon from "@material-ui/icons/CalendarTodayRounded";
import HelpRoundedIcon from "@material-ui/icons/HelpRounded";
import PollRoundedIcon from "@material-ui/icons/PollRounded";
/* import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";*/

const drawerWidth = 240;

const estilos = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,

  drawerPaper: {
    width: drawerWidth,
    elevation: 23,
  },

  logo: {
    margin: theme.spacing(1),
    height: "63%",
    width: "63%",
    marginLeft: "25px",
  },
}));

const Sidebar = (props) => {
  const { history } = props;
  const { window } = props;
  const theme = useTheme();
  const classes = estilos();
  const container =
    window !== undefined ? () => window().document.body : undefined; // nose que es esto

  const usDpx = useDispatch();   // se puede evitar esta var poniendo directo en HhandlePD

  function handlePD() {
    usDpx(FirebaseAcx("MAINDATA/PEDIDOS"));

    history.push("/");
  }

  function handleFC() {
    usDpx(obtenerFacturasAcx());

    history.push("/facturas");
  }

  const drawerList = (
    <>
      <div className={classes.toolbar}>
        <img
          className={classes.logo}
          src={require("../img/logo1.png")}
          alt="logo"
        ></img>
      </div>
      <Divider />
      <List>
        <ListItem
          button
          key="Indicadores"
          onClick={() => history.push("/indicadores")}
        >
          <ListItemIcon>
            <PollRoundedIcon color="secondary" />
          </ListItemIcon>
          <ListItemText primary={"Indicadores"} />
        </ListItem>

        <ListItem button key="Pedidos" onClick={handlePD}>
          <ListItemIcon>
            <AssignmentRoundedIcon color="secondary" />
          </ListItemIcon>
          <ListItemText primary={"Pedidos"} />
        </ListItem>

        <ListItem button key="Recibos">
          <ListItemIcon>
            <CalendarTodayRoundedIcon color="secondary" />
          </ListItemIcon>
          <ListItemText primary={"Recibos"} />
        </ListItem>

        <ListItem button key="Facturas" onClick={handleFC}>
          <ListItemIcon>
            <BallotRoundedIcon color="secondary" />
          </ListItemIcon>
          <ListItemText primary={"Facturas"} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button key="Ayuda">
          <ListItemIcon>
            <HelpRoundedIcon color="secondary" />
          </ListItemIcon>
          <ListItemText primary={"Ayuda"} />
        </ListItem>
      </List>
    </>
  );

  return (
    <Grid component={Paper} elevation={22}>
      <Grid item component={Paper} elevation={23}>
        <Card elevation={23}>
        <Drawer
          component={Paper}
          elevation={23}
          container={container}
          variant={props.variant}
          anchor={theme.direction === "rtl" ? "right" : "left"} //porque aca no se mete directamente el valor rigth o left?   impuro?
          open={props.open}
          onClose={props.onClose ? props.onClose : null} //si hay "algo" que onClose = "algo", sino  nulo  (nada)  es por si no lo definimos cuando instanciamos no pasa nada
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawerList}
        </Drawer>
        </Card>
      </Grid>
    </Grid>
  );
};

export default withRouter(Sidebar);
