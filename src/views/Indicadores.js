import React from "react";
//import { useDispatch, useSelector } from "react-redux";
//import cx from 'clsx';
//import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
//import { obtenerPedidosAcx } from '../redux/Ducks'
import {
  mdiFileDocument,
  mdiMapMarkerOff,
  mdiFileDownload,
  mdiOrderBoolDescending,
  mdiUpdate,
  mdiCalendar,
  mdiCheckCircleOutline,
} from "@mdi/js";
import { Icon as Iconmdi } from "@mdi/react";
import Warning from "@material-ui/icons/Warning";
import GridItem from "../components/Grid/GridItem.js";
import GridContainer from "../components/Grid/GridContainer.js";
import Danger from "../components/Typography/Danger.js";
import Card from "../components/Card/Card.js";
import CardHeader from "../components/Card/CardHeader.js";
import CardIcon from "../components/Card/CardIcon.js";
import CardFooter from "../components/Card/CardFooter.js";
import CardBody from "../components/Card/CardBody.js";
import styles from "../assets/jss/views/dashboardStyle.js";
import ChartistGraph from "react-chartist";

const useStyles = makeStyles(styles);

const Indicadores = () => {
  const classes = useStyles();

  var delays = 80,
    durations = 500;
  var delays2 = 80,
    durations2 = 500;

  var Chartist = require("chartist");

  // Estos datos deben bajar de MeLi API
  const dailySalesChart = {
    data: {
      labels: ["M", "T", "W", "T", "F", "S", "S"],
      series: [
        [12, 17, 7, 17, 23, 18, 38],
        [20, 30, 35, 5, 20, 10, 18],
        [25, 35, 4, 12, 40, 1, 8],
      ],
    },

    data2: {
      labels: ["ENE", "FEB", "MAR", "ABR", "MAY", "JUN"],
      series: [
        [20, 30, 35, 5, 20, 10],
        [25, 35, 4, 12, 40, 1],
        [12, 17, 7, 17, 23, 18],
      ],
    },
    options: {
      lineSmooth: Chartist.Interpolation.cardinal({
        tension: 0,
      }),
      low: 0,
      high: 50,
      chartPadding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },

    animation: {
      draw: function (data) {
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
              easing: Chartist.Svg.Easing.easeOutQuint,
            },
          });
        } else if (data.type === "point") {
          data.element.animate({
            opacity: {
              begin: (data.index + 1) * delays,
              dur: durations,
              from: 0,
              to: 1,
              easing: "ease",
            },
          });
        }
      },
    },
    animation2: {
      draw: function (data) {
        if (data.type === "bar") {
          data.element.animate({
            opacity: {
              begin: (data.index + 1) * delays2,
              dur: durations2,
              from: 0,
              to: 1,
              easing: "ease",
            },
          });
        }
      },
    },
  };

  return (
    <>
      <GridContainer justify="space-around">
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Iconmdi
                  path={mdiOrderBoolDescending}
                  title="mis indicadores"
                  size="26 px"
                  color="white"
                />
              </CardIcon>
              <p className={classes.cardCategory}>Pedidos Pendientes</p>
              <h2 className={classes.cardTitle}>7</h2>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Danger>
                  <Iconmdi
                    path={mdiCheckCircleOutline}
                    title="facturas"
                    size="15 px"
                    color="green"
                  />
                </Danger>
                <div className={classes.stats}>Estas al día!</div>
              </div>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Iconmdi
                  path={mdiMapMarkerOff}
                  title="facturas"
                  size="26 px"
                  color="white"
                />
              </CardIcon>
              <p className={classes.cardCategory}>Entregas Fallidas</p>
              <h2 className={classes.cardTitle}>2</h2>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Danger>
                  <Warning />
                </Danger>
                <div className={classes.stats}>Comunicarse con soporte!</div>
              </div>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Iconmdi
                  path={mdiFileDocument}
                  title="facturas"
                  size="26 px"
                  color="white"
                />
              </CardIcon>
              <p className={classes.cardCategory}>Facturas Pendientes</p>
              <h2 className={classes.cardTitle}>$6500</h2>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Danger>
                  <Iconmdi
                    path={mdiCalendar}
                    title="facturas"
                    size="15 px"
                    color="grey"
                  />
                </Danger>
                <div className={classes.stats}>Ultimo cierre 22/12.</div>
              </div>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Iconmdi
                  path={mdiFileDownload}
                  title="facturas"
                  size="26 px"
                  color="white"
                />
              </CardIcon>
              <p className={classes.cardCategory}>Recibos sin descargar</p>
              <h2 className={classes.cardTitle}>5</h2>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Iconmdi
                  path={mdiUpdate}
                  title="mis indicadores"
                  size="15 px"
                  color="green"
                />

                <div className={classes.stats}>Actualizado hoy.</div>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>

      <GridContainer justify="space-evenly">
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={dailySalesChart.data}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Pedidos Semanales</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>55%</span> incremento vs.
                semana anterior.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <Iconmdi
                  path={mdiUpdate}
                  title="mis indicadores"
                  size="15 px"
                  color="green"
                />

                <div className={classes.stats}>Actualizado 4 minutes ago.</div>
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
                listener={dailySalesChart.animation2}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Distribución por Zona</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}></span> GBA NORTE - GBA
                SUR - GBA OESTE - CABA.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <Iconmdi
                  path={mdiUpdate}
                  title="mis indicadores"
                  size="15 px"
                  color="green"
                />

                <div className={classes.stats}>Actualizado 4 minutes ago.</div>
              </div>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="primary">
              <ChartistGraph
                className="ct-chart"
                data={dailySalesChart.data2}
                type="Bar"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation2}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Ultimo semestre</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}></span> ENERO - JUNIO /
                2020
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <Iconmdi
                  path={mdiUpdate}
                  title="mis indicadores"
                  size="15 px"
                  color="green"
                />

                <div className={classes.stats}>Actualizado 4 minutes ago.</div>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </>
  );
};

export default Indicadores;
