import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { Grid, Paper } from '@material-ui/core';
import { useStyles } from '../style/AppStyle';
import CircularProgress from '@material-ui/core/CircularProgress';
import Pagination from '@material-ui/lab/Pagination';

import { useNavigate } from 'react-router-dom';
import useDebounce from '../hooks/useDebounce';
import { homeData } from '../api/Api';

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
      setData(await homeData(debounce))
      setCurrentPage(1)
    }

    fetchData()
  }, [debounce])
  const hitsPerPage = 10;
  const indexOfLastExercise = currentPage * hitsPerPage;
  const indexOfFirstExercise = indexOfLastExercise - hitsPerPage
  const currentHits = data?.hits?.slice(indexOfFirstExercise,indexOfLastExercise)
  const paginate =(e, value)=>{
    setCurrentPage(value)
    window.scrollTo({top:0, behavior:"smooth"})
  }


  if(data.length===0) return <Grid sx={12} className={classes.loader}><CircularProgress/></Grid>

  else {
  return (
      <Grid item xs={12} >
        <Paper className={classes.paper} >
        
          <div className={classes.search}>
            <div className={classes.searchIcon}>
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
                    <Grid item xs={12} key={index} style={{border:"1px solid #3f50b4", marginBlock:"0.5rem", cursor:"pointer", padding:"1rem"}} onClick={()=>navigate(`/details/${item?.objectID}`)}>

                        <Typography style={{textTransform:"capitalize"}}><span className={classes.span}>Title</span> : {item?.title}</Typography>
                        <Typography style={{textTransform:"capitalize"}}><span className={classes.span}>Author</span> :{item?.author}</Typography>
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

