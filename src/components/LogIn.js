import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import mainBg from "../img/mainBg.jpg";

const estilos = makeStyles((theme) => ({
  
  root: {
    display: "flex",
    height: "100vh",
    backgroundSize: "cover",
    backgroundImage: `url(${mainBg})`,
    
  },

  logo: {
    margin: theme.spacing(3),
    height: "70%",
    width: "70%",
    
  },

  subtitle: {
    marginBottom: 50
  },
 

  
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

  textInput:{
    fontsize:10,
  },
}));

function LogIn(props) {
  const classes = estilos();
  const { handleChange } = props;
  const { handleSubmit } = props;

  return (
    <div>
      <Grid
        container
        component="main"
        className={classes.root}
        justify="center"
      >
        <CssBaseline />
      
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <img
              className={classes.logo}
              src={require("../img/logoMain.png")}
              alt="logo"
            ></img>

        
            <Typography className= {classes.subtitle} component="h1" variant="h5">
              Acceso Clientes
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Ingrese su Email"
                name="email"
                autoComplete="email"
                onChange={handleChange}
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Ingrese su clave de acceso"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
                onClick={handleSubmit}
              >
                Iniciar Sesion
              </Button>
              <Grid container>
                <Grid item>
                  <Link color= "secondary" href="#" variant="body2">
                    {"Olvidaste tu contraseña?"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default LogIn;
