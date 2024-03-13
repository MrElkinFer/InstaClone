import React from 'react'

//Layouts
import LayoutBasic from "../Layouts/LayoutBasic";

//Pages
import Home from "../pages/Home";
import User from "../pages/User";
import Error404 from "../pages/Error404";


import {RouterProvider, createBrowserRouter} from "react-router-dom";


const routes = createBrowserRouter ([
  {
    path: '/',
    Layout: <LayoutBasic/>,  // Importación del layoutBasic 
    element: <Home/>,
    errorElement: <Error404/>
  },

  {
    path: '/:username',
    Layout: <LayoutBasic/>,  // Importación del layoutBasic
    element: <User/>,
  },


]);

export default function Navigation() {
  return (

    <LayoutBasic>
      <RouterProvider router={routes}/>
   </LayoutBasic>
    
   );
}
