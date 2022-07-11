
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth:"95%",
      margin:"0 auto"
    },
    // menuButton: {
    //     marginRight: theme.spacing(2),
    //   },
    // search: {
    //   display:"flex",
    //   alignItems:"center",
    //   width:"50%",
    //   marginBlock:"1em 2em",
    //   position:"relative"
    // },
    // searchIcon: {
    //   padding: theme.spacing(0, 2),
    //   height: '100%',
    //   pointerEvents: 'none',
    //   display: 'flex',
    //   alignItems: 'center',
    //   justifyContent: 'center',
     

    // },
    // inputRoot: {
    //   color: 'inherit',
    // },
    // inputInput: {
    //   position:'absolute',
    //   top:-20,
    //   left:-55,
    //   padding: theme.spacing(1, 1, 1, 0),
    //   // vertical padding + font size from searchIcon
    //   border:"1px solid #3f50b4",
    //   borderRadius:"5px",
    //   backgroundColor:"transparent",
    //   paddingLeft: "3rem",
    //   transition: theme.transitions.create('width'),
    //   width: '50%',
    //   [theme.breakpoints.up('sm')]: {
    //     width: '12ch',
    //     '&:focus': {
    //       width: '20ch',
    //     },
    //   },
    // },
    paper: {
      padding: theme.spacing(0.5),
      display:"flex",
      alignItems:"center",
      justifyContent:"space-between",
      color: theme.palette.text.secondary,
      paddingInline:"1rem"
    },
  }));