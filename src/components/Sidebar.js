import React from "react";
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
import Icon from "@mdi/react";
import {
  mdiFinance,
  mdiFileTable,
  mdiFileDocument,
  mdiLifebuoy,
  mdiOrderBoolDescending,
} from "@mdi/js";
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
    margin: theme.spacing(0.5),
    height: "76%",
    width: "76%",
    marginLeft: "25px",
  },
}));

const Sidebar = (props) => {
  const { history } = props;
  const { window } = props;
  const theme = useTheme();
  const classes = estilos();
  const container =
    window !== undefined ? () => window().document.body : undefined;

  //Ruteo

  function handlePD() {
    history.push("/pedidos");
  }

  function handleFC() {
    history.push("/facturas");
  }

  function handleRC() {
    history.push("/recibos");
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
          onClick={() => history.push("/home")}
        >
          <ListItemIcon>
            <Icon
              path={mdiFinance}
              title="mis indicadores"
              size={1}
              color="grey"
            />
          </ListItemIcon>
          <ListItemText primary={"Indicadores"} />
        </ListItem>

        <ListItem button key="Pedidos" onClick={handlePD}>
          <ListItemIcon>
            <Icon
              path={mdiOrderBoolDescending}
              title="mis indicadores"
              size={1}
              color="grey"
            />
          </ListItemIcon>
          <ListItemText primary={"Pedidos"} />
        </ListItem>

        <ListItem button key="Facturas" onClick={handleFC}>
          <ListItemIcon>
            <Icon
              path={mdiFileDocument}
              title="mis indicadores"
              size={1}
              color="grey"
            />
          </ListItemIcon>
          <ListItemText primary={"Facturas"} />
        </ListItem>

        <ListItem button key="Recibos" onClick={handleRC}>
          <ListItemIcon>
            <Icon
              path={mdiFileTable}
              title="mis indicadores"
              size={1}
              color="grey"
            />
          </ListItemIcon>
          <ListItemText primary={"Recibos"} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button key="Ayuda" onClick={() => history.push("/ayuda")}>
          <ListItemIcon>
            <Icon
              path={mdiLifebuoy}
              title="mis indicadores"
              size={1}
              color="grey"
            />
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
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={props.open}
            onClose={props.onClose ? props.onClose : null}
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
