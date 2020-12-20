/* eslint-disable no-unused-vars */
import React, { useState } from "react";
//import { useDispatch, useSelector } from "react-redux";
//import { FirebaseAcx } from "../REDUX/Ducks";
import Typography from "@material-ui/core/Typography";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import GridItem from "../components/Grid/GridItem.js";
import GridContainer from "../components/Grid/GridContainer.js";
import Card from "../components/Card/Card.js";
import CardHeader from "../components/Card/CardHeader.js";
import {
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import CardAvatar from "../components/Card/CardAvatar.js";
//import CardFooter from "./Card/CardFooter.js";
import CardBody from "../components/Card/CardBody.js";
//import Table from "./Table3.js";
import MainTheme from "../config/TemaMain.js";
import { MenuItem, FormControl, Select } from "@material-ui/core";
import avatar from "../assets/img/prof.jpg";
import { mdiConsoleLine } from "@mdi/js";
import { Icon as Iconmdi } from "@mdi/react";

import DraftsIcon from "@material-ui/icons/Drafts";

const useStyles = makeStyles((theme) => ({
  svgicon: {
    border: "3px  solid red ",
  },

  root: {
    flexGrow: 1,
  },
  select: {
    color: "#eef7e4",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },

  selectEmpty: {
    marginTop: theme.spacing(2),
  },

  title: {
    margin: theme.spacing(1),
  },
  cardTitle: {
    margin: theme.spacing(1),
    marginTop: theme.spacing(6),
  },
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "18px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },

  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
}));

const Ayuda = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={MainTheme}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>
                Plataforma WEB para Gestión de cuentas corrientes
              </h4>
              <p className={classes.cardCategoryWhite}>
                Presentación y Generalidades
              </p>
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>PRESENTACIÓN</h4>
              <p>
                Realice esta web como práctica sobre las diferentes tecnologías
                que fui incorporando al stack, se trata de un modelo de
                plataforma web para seguimiento de comprobantes, con un panel de
                indicadores clave como portada. Sus funcionalidades son básicas
                y limitadas respondiendo al modelo de MVP (Minimum Viable
                Product).
              </p>
              <p></p>
              <p></p>
              <h4 className={classes.cardTitle}>TECNOLOGÍAS IMPLEMENTADAS</h4>
              <List>
                <ListItem disableGutters dense>
                  <ListItemText>Stack</ListItemText>
                </ListItem>

                <ListItem disableGutters>
                  <ListItemIcon>
                    <Iconmdi
                      path={mdiConsoleLine}
                      title="mis indicadores"
                      size={1}
                      color="grey"
                    />
                  </ListItemIcon>
                  <ListItemText>Node JS </ListItemText>
                </ListItem>

                <ListItem disableGutters>
                  <ListItemIcon>
                    <Iconmdi
                      path={mdiConsoleLine}
                      title="mis indicadores"
                      size={1}
                      color="grey"
                    />
                  </ListItemIcon>
                  <ListItemText>REACT </ListItemText>
                </ListItem>

                <ListItem disableGutters>
                  <ListItemIcon>
                    <Iconmdi
                      path={mdiConsoleLine}
                      title="mis indicadores"
                      size={1}
                      color="grey"
                    />
                  </ListItemIcon>
                  <ListItemText>Redux </ListItemText>
                </ListItem>

                <ListItem disableGutters>
                  <ListItemIcon>
                    <Iconmdi
                      path={mdiConsoleLine}
                      title="mis indicadores"
                      size={1}
                      color="grey"
                    />
                  </ListItemIcon>
                  <ListItemText>
                    Firebase API (módulos: AuthO y RT Database)
                  </ListItemText>
                </ListItem>
              </List>
              <List>
                <ListItem disableGutters>
                  <ListItemText> Otras librerías y features</ListItemText>
                </ListItem>

                <ListItem disableGutters>
                  <ListItemIcon>
                    <Iconmdi
                      path={mdiConsoleLine}
                      title="mis indicadores"
                      size={1}
                      color="grey"
                    />
                  </ListItemIcon>
                  <ListItemText>Material UI</ListItemText>
                </ListItem>

                <ListItem disableGutters>
                  <ListItemIcon>
                    <Iconmdi
                      path={mdiConsoleLine}
                      title="mis indicadores"
                      size={1}
                      color="grey"
                    />
                  </ListItemIcon>
                  <ListItemText>React Router </ListItemText>
                </ListItem>

                <ListItem disableGutters>
                  <ListItemIcon>
                    <Iconmdi
                      path={mdiConsoleLine}
                      title="mis indicadores"
                      size={1}
                      color="grey"
                    />
                  </ListItemIcon>
                  <ListItemText>React Hooks</ListItemText>
                </ListItem>
              </List>
              <h4 className={classes.cardTitle}>COMENTARIOS ADICIONALES</h4>
              <p>
                Si bien el layout es responsive, no esta optimizado del todo
                para uso en móbiles.
              </p>
              <p>
                Dado que la aplicación es una demo, la base de datos fue
                generada de forma aleatoria con un JSON Generator, es decir no
                existe relación entre los distintos comprobantes
                (montos,cantidades,IDs).
              </p>
              <p>
                <a href="https://www.github.com/cristian-fs/uxp_demo">
                  Repositorio: github.com/cristian-fs/uxp_demo
                </a>
              </p>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="https://www.linkedin.com/in/cristian-seoane-a3938020/">
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h5 className={classes.cardCategory}>DESARROLLADOR WEB Jr.</h5>
              <h4 className={classes.cardTitle}>Cristian Seoane</h4>
              <p className={classes.description}>
                Apasionado por la tecnología y el arte de "crear", acompañado de
                un aprendizaje autodidacta y esquivando paradigmas busco
                superarme día a día, aprendiendo de los errores y sumando valor
                al conocimiento para compartirlo con quienes más lo necesitan.
              </p>
              <Button color="secondary" round>
                <a href="https://www.linkedin.com/in/cristian-seoane-a3938020/">
                  Linked In
                </a>
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </ThemeProvider>
  );
};

export default Ayuda;
