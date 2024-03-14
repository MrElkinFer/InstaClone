import React from 'react';
import "./Profile.scss";
import { useQuery } from '@apollo/client';// para hacer el get de obtener datos
import { GET_USER } from '../../gql/user';


export default function Profile(props) {

  const {username} = props;
  
  const {data, loading,error}= useQuery(GET_USER, {
    variables:{username},
  });

  if(loading)return null; // si no ha cargado no renderiza la pantalla: loading === false
  if(error) return <h1>Usuario no encontrado</h1> 

  const {getUser}= data;

  console.log(getUser);


  return (

    <>
      <h1>Profile...</h1>
    </>
  )
}
