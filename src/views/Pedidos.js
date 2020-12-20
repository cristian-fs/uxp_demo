/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FirebaseAcx } from "../REDUX/Ducks";
//import Typography from '@material-ui/core/Typography';
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import GridItem from "../components/Grid/GridItem.js";
import GridContainer from "../components/Grid/GridContainer.js";
import Card from "../components/Card/Card.js";
import CardHeader from "../components/Card/CardHeader.js";
//import CardFooter from "./Card/CardFooter.js";
import CardBody from "../components/Card/CardBody.js";
import Table from "../components/Table.js";
import MainTheme from "../config/TemaMain.js";

import { MenuItem, FormControl, Select } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
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

const Pedidos = () => {
  const [age, setAge] = useState("2020");
  const [mes, setMes] = useState("ENERO");
  const usDpx = useDispatch();
  const classes = useStyles();
  const pedidosQry = useSelector((store) => store.fireStore.pedidos);
  const columnas = [
    "ID",
    "FECHA",
    "ZONA",
    "IMPORTE",
    "CANT. PAQUETES",
    "ESTADO",
  ];

  const handleChangeAno = (event) => {
    //ejecuta un query cuando cambia el SELECT  Año
    setAge(event.target.value);

    usDpx(FirebaseAcx(mes, event.target.value));
  };

  const handleChangeMes = (event) => {
    //ejecuta un query cuando cambia el SELECT  Mes
    setMes(event.target.value);
    usDpx(FirebaseAcx(event.target.value, age));
    console.log("este es anio" + age);
  };

  return (
    <ThemeProvider theme={MainTheme}>
      <GridContainer>
        <GridItem xs={12}>
          <Card>
            <CardHeader color="rose">
              <GridContainer
                justify="space-between"
                direction="row"
                alignItems="center"
                className={classes.root}
              >
                <GridItem xs={12} md={9} sm={9}>
                  <h2 className={classes.cardTitleWhite}>PEDIDOS REALIZADOS</h2>
                  <p className={classes.cardCategoryWhite}> Sucursal 001 </p>
                </GridItem>
                <GridItem xs={3}>
                  <FormControl className={classes.formControl}>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={mes}
                      onChange={handleChangeMes}
                      className={classes.select}
                    >
                      <MenuItem value={"ENERO"}>ENERO</MenuItem>
                      <MenuItem value={"FEBRERO"}>FEBRERO</MenuItem>
                      <MenuItem value={"MARZO"}>MARZO</MenuItem>
                      <MenuItem value={"ABRIL"}>ABRIL</MenuItem>
                      <MenuItem value={"MAYO"}>MAYO</MenuItem>
                      <MenuItem value={"JUNIO"}>JUNIO</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <Select
                      labelId="demo-simple-select-label2"
                      id="demo-simple-select2"
                      value={age}
                      onChange={handleChangeAno}
                      className={classes.select}
                    >
                      <MenuItem value={"2019"}>2019</MenuItem>
                      <MenuItem value={"2020"}>2020</MenuItem>
                    </Select>
                  </FormControl>
                </GridItem>
              </GridContainer>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="rose"
                tableHead={columnas}
                tableData={pedidosQry}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </ThemeProvider>
  );
};

export default Pedidos;
