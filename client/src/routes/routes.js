
import Home from "../pages/Home";
import User from "../pages/User";
import Error404 from "../pages/Error404";

import {createBrowserRouter} from "react-router-dom"

const routes = createBrowserRouter ([
  {
    path: '/',
    element: <Home/>,
    errorElement: <Error404/>
  },

  {
    path: '/:username',
    element: <User/>,
  },


]);

export default routes;

