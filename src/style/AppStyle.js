
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth:"95%",
      margin:"0 auto",
    },
    loader:{
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      minHeight:"100vh",
    },
    Toolbar:{
      backgroundColor:"#3f50b4",
      display:"flex",
      alignItems:"center",
      justifyContent:"space-between"
    },
    search:{
      display:"flex",
      alignItems:"center", 
      width:"95%",
      [theme.breakpoints.up('sm')]:{
        width:"25vw",
        '&:focus': {
          width: '30vw',
        },
      },
      padding:"0.2rem 0.5rem",
      gap:"0.3rem",
      border:"1px solid #3f50b4"
    },
    searchIcon:{
      paddingTop:"0.3rem"
    },
    span:{
      color:"#3f50b4",
      textTransform:"uppercase"
    },
    paper: {
      padding: theme.spacing(1),
      display:"flex",
      flexDirection:"column",
      gap:"0.5rem",
      color: theme.palette.text.secondary,
      marginBottom:"2rem"
    },
  }));