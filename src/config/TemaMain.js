import { createMuiTheme } from '@material-ui/core/styles';   
import {lime , indigo} from '@material-ui/core/colors';


const MainTheme = createMuiTheme({

    palette: {
        primary: {
          main: lime[500],
        },
        secondary: {
          main: indigo[600],
        },
      },




}

)

export default MainTheme