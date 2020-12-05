import React from "react";
import fire from "../config/fire";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles(theme => ({

   

    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    title: {
        flexGrow: 1,  
                                    
    },
    appBar: {

        background: '#424242', //#424242  #383352

        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${240}px)`,     //  aca va  DrawerWidth...  pero esta en otro componente
            marginLeft: 240,
        },
    },
}))






const Appbar = (props) => {
    const {closeHome } = props;
    

    const classes = useStyles()


    function logout() {
        fire.auth().signOut();
        closeHome();
        
        //history.replace("./");
    }


    return (   
           <div>
        <AppBar className={classes.appBar} position="fixed" >
            <Toolbar>
                
                <IconButton
                    color="primary"
                    aria-label="menu"                                                     // en la doc aca dice> aria-label="open drawer"
                    className={classes.menuButton}
                    //edge="start"
                    onClick={() => props.desplegar()}                                     //nose porque un arrow aca....
                >
                    <MenuIcon />
                </IconButton>
                 <Typography color="primary" variant="h6" noWrap className={classes.title} >PLATAFORMA CLIENTES</Typography>
                 <IconButton color="primary" aria-label="exit">
                 <ExitToAppIcon onClick={logout}/>
               
                 </IconButton>
            </Toolbar>
        </AppBar>
        </div>
    )
}


    export default withRouter(Appbar);