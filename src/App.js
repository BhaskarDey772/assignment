import React from 'react';
import { useStyles } from './style/AppStyle';
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Home from './Pages/Home';
import DetailsPage from "./Pages/DetailsPage"

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Header/>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/details/:id" element={<DetailsPage/>} /> 
      </Routes>

    </div>
  );
}

export default App