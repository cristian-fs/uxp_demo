/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cx from 'clsx';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
//import { obtenerPedidosAcx } from '../redux/Ducks'
import Icon from "@material-ui/core/Icon";
import Warning from "@material-ui/icons/Warning";
import GridItem from "./Grid/GridItem.js";
import GridContainer from "./Grid/GridContainer.js";
import Danger from "./Typography/Danger.js";
import Card from "./Card/Card.js";
import CardHeader from "./Card/CardHeader.js";
import CardIcon from "./Card/CardIcon.js";
import CardFooter from "./Card/CardFooter.js";
import CardBody from "./Card/CardBody.js";
import styles from "../assets/jss/views/dashboardStyle.js";
import AssignmentRoundedIcon from "@material-ui/icons/AssignmentRounded"
import ChartistGraph from "react-chartist";


const useStyles = makeStyles(styles);



const Indicadores = () => {
  
  //const classes = estilos();
 // const indicadoresQry = useSelector((store) => store.fireStore.pedidos);
 const classes = useStyles();



 var delays = 80,
 durations = 500;
var delays2 = 80,
 durations2 = 500;

 var Chartist = require("chartist");
    
 const dailySalesChart = {
  data: {
    labels: ["M", "T", "W", "T", "F", "S", "S"],
    series: [[12, 17, 7, 17, 23, 18, 38],[20, 30, 45, 5, 20, 10, 18],[25, 35, 4, 12, 50, 1, 8]]
    
  },
  options: {
    lineSmooth: Chartist.Interpolation.cardinal({
      tension: 0
    }),
    low: 0,
    high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  },
  // for animation
  animation: {
    draw: function(data) {
      if (data.type === "line" || data.type === "area") {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === "point") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    }
  }
};
  

  return (
    <>
<GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon><AssignmentRoundedIcon/></Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Pedidos Pendientes</p>
              <h2 className={classes.cardTitle}>
                1 
              </h2>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                {/*<Danger>
                  <Warning />
                </Danger>
                <a >
                  Get more space
  </a> */}
              </div>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon><AssignmentRoundedIcon/></Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Entregas Fallidas</p>
              <h2 className={classes.cardTitle}>
                2
              </h2>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Danger>
                  <Warning />
                </Danger>
                <a >
                  Comunicarse con soporte
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon><AssignmentRoundedIcon/></Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Facturas</p>
              <h2 className={classes.cardTitle}>
               $6500
              </h2>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Danger>
                  <Warning />
                </Danger>
                <a >
                  Cierre 23/11
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="info">
              <ChartistGraph
                 className="ct-chart"
                 data={dailySalesChart.data}
                 type="Line"
                 options={dailySalesChart.options}
                 listener={dailySalesChart.animation}
                
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Daily Sales</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                   55%
                </span>{" "}
                increase in today sales.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                 updated 4 minutes ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>


        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="rose">
              <ChartistGraph
                 className="ct-chart"
                 data={dailySalesChart.data}
                 type="Bar"
                 options={dailySalesChart.options}
                 listener={dailySalesChart.animation}
                
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Daily Sales</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                   55%
                </span>{" "}
                increase in today sales.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                 updated 4 minutes ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        
        </GridContainer>

</>
  
 )
};


export default Indicadores;
