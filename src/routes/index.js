import React from "react";
import {Routes, Route, Redirect, useNavigate, Navigate} from 'react-router-dom';
import TextMove from "../components/TextMove/TextMove";
import VHome from "../views/Home/VHome";

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={ <VHome />}></Route>
      <Route path='/test' element={ <TextMove />}></Route>
      <Route path='*' element={ <Navigate to="/" /> }></Route>
    </Routes>
  )
}

export default Router;