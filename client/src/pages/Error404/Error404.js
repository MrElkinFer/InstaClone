import React from 'react'
import "./Error404.scss";
import {useRouteError} from "react-router-dom"

export default function Error404() {
  const error = useRouteError();

  console.error(error);

  return (
    <div>
      <h1>Error404... desde el componente</h1>
    </div>
  )
}
