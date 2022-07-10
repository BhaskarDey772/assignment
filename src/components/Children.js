import { Grid, IconButton, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
const Children = ({item}) => {
    const [state, setState] = useState(false)


    if(item?.children.length > 0){
  return (
    
    <Grid>
        <Grid style={{display:"flex"}}>
        {item?.author  &&  <Typography variant='h4' style={{textTransform:"capitalize"}}>{item?.author}</Typography>}
        <IconButton  onClick={()=>setState(!state)}>
            {state ?<ArrowDropUpIcon/>:<ArrowDropDownIcon/>}
        </IconButton>
        </Grid>
      
        <Grid style={{display:state?"block":"none", paddingLeft:"0.5rem"}}>
            {item?.children?.map((itm, index)=>{
                return(
                    <Children item={itm} key={index}/>
                )
            })}
        </Grid>
    </Grid>
  )
}
else{
    return(
        <Grid>
           {item?.author && <Typography style={{textTransform:"capitalize"}} variant='h5'>{item?.author}</Typography>}
            {/* <Typography>{item?.text}</Typography> */}
        </Grid>
    )
}
}

export default Children