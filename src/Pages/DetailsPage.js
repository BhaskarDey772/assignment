import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CircularProgress, Grid, Paper, Typography } from '@material-ui/core';
import Children from '../components/Children';
import Pagination from '@material-ui/lab/Pagination';
const DetailsPage = () => {
    let { id } = useParams();
    const [data, setData] = useState([])
    const[currentPage, setCurrentPage] = useState(1) 
    const hitsPerPage = 10;
    const indexOfLastExercise = currentPage * hitsPerPage;
    const indexOfFirstExercise = indexOfLastExercise - hitsPerPage
    const currentChildren = data?.children?.slice(indexOfFirstExercise,indexOfLastExercise)
    const paginate =(e, value)=>{
        setCurrentPage(value)
    }
    
  useEffect(() => {

    const fetchData = async()=>{
        await axios.get(`  http://hn.algolia.com/api/v1/items/${id}`).then(({data})=>setData(data)).catch((err)=>console.error(err))
    }

    fetchData()
  }, [id])


  console.log(data)

  if(data.length===0) return <Grid sx={12} style={{display:"flex", alignItems:"center", justifyContent:"center", minHeight:"100vh"}}><CircularProgress/></Grid>
  
    else{
    return (
        <Grid >
            <Paper style={{marginBottom:"2rem", paddingInline:"0.5rem"}}>
    
                <Typography style={{textTransform:"capitalize"}} variant='h4'><span style={{color:"#3f50b4", textTransform:"uppercase"}}>Title</span>:{data?.title}</Typography>
                <Typography style={{textTransform:"capitalize"}} variant='h5'><span style={{color:"#3f50b4", textTransform:"uppercase"}}>Author</span> :{data?.author}</Typography>
                <Typography style={{textTransform:"uppercase"}} variant="h4">Children</Typography>
                <Grid>
                    {currentChildren.map((item)=>{
                    return (
                    <Grid style={{border:"1px solid #3f50b4", marginBlock:"0.5rem", padding:"0.5rem"}}>
                        <Children item={item}/>
                    </Grid>
                    )
                    })}
                </Grid>


                <Grid style={{paddingBlock:"1rem"}}>
                    <Pagination
                    color="standard"
                    shape="rounded"
                    defaultPage={1}
                    count={Math.ceil(data?.children?.length/hitsPerPage)}
                    page={currentPage}
                    onChange={paginate}
                    size="large"
                    />
            </Grid>
                
            </Paper>
        </Grid>
    )
    }
}

export default DetailsPage