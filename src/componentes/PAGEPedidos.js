/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from "@material-ui/data-grid";
import Typography from '@material-ui/core/Typography';
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
//import { obtenerPedidosAcx } from '../redux/Ducks'
import GridItem from "./Grid/GridItem.js";
import GridContainer from "./Grid/GridContainer.js";
import Card from "./Card/Card.js";
import CardHeader from "./Card/CardHeader.js";
import CardFooter from "./Card/CardFooter.js";
import CardBody from "./Card/CardBody.js";
import Table from "./Table.js";
import MainTheme from '../config/TemaMain.js'





const useStyles = makeStyles((theme) => ({
  

  title: {
    margin: theme.spacing(1)
  },
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
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
      lineHeight: "1"
    }
  }
  
}));

const Pedidos = () => {
  
  const classes = useStyles();
  const pedidosQry = useSelector((store) => store.fireStore.pedidos);

  const columnas = ["Name", "Country", "City", "Salary"];

  

  return (
    <ThemeProvider theme={MainTheme}>
    <GridContainer>
    <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="rose">
            <h4 className={classes.cardTitleWhite}>PEDIDOS REALIZADOS</h4>
            <p className={classes.cardCategoryWhite}> Sucursal 001 </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="rose"
              tableHead={["Name", "Country", "City", "Salary"]}
              tableData={[
                ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"],
                ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
                ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
                ["Philip Chaney", "Korea, South", "Overland Park", "$38,735"],
                ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", "$63,542"],
                ["Mason Porter", "Chile", "Gloucester", "$78,615"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      
      
      </GridContainer>
      </ThemeProvider>
  );
};

export default Pedidos;
