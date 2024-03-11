import React from 'react'
import routes from './routes';

import {RouterProvider} from "react-router-dom";
import LayoutBasic from '../Layouts/LayoutBasic';

export default function Navigation() {
  return (

    <LayoutBasic>
      <RouterProvider router={routes}/>
   </LayoutBasic>
    
   );
}
