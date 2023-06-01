import React from 'react'
import {BrowserRouter , Route , Routes} from "react-router-dom"
import HomePage from "../nokta/home-page";

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default Router