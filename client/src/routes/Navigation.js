import React from 'react'
import routes from './routes';
import {RouterProvider} from "react-router-dom";

export default function Navigation() {
  return (
    <RouterProvider router={routes}/>
   );
}
