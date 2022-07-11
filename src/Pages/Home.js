import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { Grid, Paper } from '@material-ui/core';
import { useStyles } from '../style/AppStyle';
import CircularProgress from '@material-ui/core/CircularProgress';
import Pagination from '@material-ui/lab/Pagination';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useDebounce from '../hooks/useDebounce';

const Home = () => {
  const classes = useStyles();
  const [search, setSearch] = useState("")
  const [data, setData]=useState("")
  const[currentPage, setCurrentPage] = useState(1)
  let navigate = useNavigate();
  const debounce = useDebounce(search)
  const handleSearch =(e)=>{
    setSearch(e.target.value)
  }


  useEffect(() => {
    const fetchData = async()=>{
      await axios.get(`https://hn.algolia.com/api/v1/search?query=${debounce}`).then(({data})=>setData(data)).catch((err)=>console.error(err))
    }

    fetchData()
  }, [debounce])

  
  const hitsPerPage = 10;
  const indexOfLastExercise = currentPage * hitsPerPage;
  const indexOfFirstExercise = indexOfLastExercise - hitsPerPage
  const currentHits = data?.hits?.slice(indexOfFirstExercise,indexOfLastExercise)
  const paginate =(e, value)=>{
    setCurrentPage(value)
  }


  if(data.length===0) return <Grid sx={12} style={{display:"flex", alignItems:"center", justifyContent:"center", minHeight:"100vh"}}><CircularProgress/></Grid>

  else {
  return (
      <Grid item xs={12} >
        <Paper style={{ paddingBlock:"1rem", paddingInline:'0.5rem' , marginBottom:"2rem"}} >
        
          <div style={{display:"flex",alignItems:"center", width:"30%",padding:"0.2rem 0.5rem",gap:"0.3rem", border:"1px solid #3f50b4"}}>
            <div style={{paddingTop:"0.3rem"}}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={search}
              onChange={handleSearch}
              style={{width:"100%"}}
            />
          </div>

          <Grid >
                {currentHits?.map((item,index)=>{
                let arr=[]
                    
                    for (let [key, value] of Object.entries(item?._tags)) {
                        arr.push(value)
                    }
                    return(
                    <Grid item xs={12} key={index} style={{border:"1px solid #3f50b4", marginBlock:"0.5rem", cursor:"pointer", padding:"1rem"}} onClick={()=>navigate(`/details/${item?.objectID}`, { replace: true })}>

                        <Typography style={{textTransform:"capitalize"}}><span style={{color:"#3f50b4", textTransform:"uppercase"}}>Title</span> : {item?.title}</Typography>
                        <Typography style={{textTransform:"capitalize"}}><span style={{color:"#3f50b4", textTransform:"uppercase"}}>Author</span> :{item?.author}</Typography>
                        <Grid style={{display:"flex", gap:"0.2rem", flexDirection:"column"}}>
                            <span style={{color:"#3f50b4", textTransform:"uppercase"}}>Tags :</span>
                            {arr.map((item, index)=>{

                                return (
                                  <>
                                <Typography>{index+1} ) {item}</Typography>
                                </>
                                )
                            })}
                        </Grid>
                    </Grid>
                )})}

            </Grid>
            <Grid>
                <Pagination
                color="standard"
                shape="rounded"
                defaultPage={1}
                count={Math.ceil(data?.hits?.length/hitsPerPage)}
                page={currentPage}
                onChange={paginate}
                size="large"
                />
            </Grid>
    </Paper>
</Grid>
  );
        }
}

export default Home