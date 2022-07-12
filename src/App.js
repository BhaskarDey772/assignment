import React, { useState } from 'react';
import { useStyles } from './style/AppStyle';
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Home from './Pages/Home';
import DetailsPage from "./Pages/DetailsPage"

const App = () => {
  const classes = useStyles();
  const [theme, setTheme] = useState(false)

  return (
    <div className={classes.root}>
    <Header theme={theme} setTheme={setTheme}/>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/details/:id" element={<DetailsPage/>} /> 
    </Routes>
    </div>
  );
}

export default App

