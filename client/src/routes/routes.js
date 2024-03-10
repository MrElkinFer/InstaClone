
import Home from "../pages/Home";
import User from "../pages/User";
import Error404 from "../pages/Error404";

import {createBrowserRouter} from "react-router-dom"

const routes = createBrowserRouter ([
  {
    path: '/',
    element: <Home/>,
  },

  {
    path: '/user',
    element: <User/>,
  },

  {
    element: <Error404/>,// Mirar si la lee por defecto
  }

]);

export default routes;

