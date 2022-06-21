import React from "react";
import {Routes, Route, Redirect, useNavigate, Navigate} from 'react-router-dom';
import VHome from "../views/Home/VHome";

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={ <VHome />}></Route>
      <Route path='*' element={ <Navigate to="/" /> }></Route>
    </Routes>
  )
}

export default Router;