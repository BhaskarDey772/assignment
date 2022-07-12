import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { Grid} from '@material-ui/core';
import { useStyles } from '../style/AppStyle';

import { useNavigate } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';

const Header = () => {
  const classes = useStyles();
  const navigate  = useNavigate()
  return (
        <Grid item xs={12} style={{marginBottom:"1rem" }}>
     
          <Toolbar className={classes.Toolbar} >
            <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
                onClick={()=>navigate("/" , { replace: true })}
            >
                <HomeIcon style={{color:"white"}}  />
            </IconButton>
            <Typography style={{color:"white"}}>
                Assignment One
            </Typography>
          
          
          </Toolbar>
        </Grid>
  );
}

export default Header

