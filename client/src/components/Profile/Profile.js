import React from 'react';
import {Grid, Image} from "semantic-ui-react";
import "./Profile.scss";
import { useQuery } from '@apollo/client';// para hacer el get de obtener datos
import { GET_USER } from '../../gql/user';
import imageNoFound from "../../assets/png/avatar.png"; 
import UserNotFound from '../UserNoFound';
import ModelBasic from '../Modal/ModalBasic';
import { useState } from 'react';


export default function Profile(props) {

  const {username} = props;
  
  const {data, loading,error}= useQuery(GET_USER, {
    variables:{username},
  });

  const [showModal, setShowModal] = useState(false); // estado para el ModelBasic emergente.

  if(loading)return null; // si no ha cargado no renderiza la pantalla: loading === false
  if(error) return <UserNotFound/> 

  const {getUser}= data;// aquí estan los datos del usuario

  console.log(getUser);


  return (

    <>
      <Grid className='profile'>
        <Grid.Column width={5} className='profile__left'>
          <Image src={imageNoFound} avatar />
        </Grid.Column>
        <Grid.Column width={11} className='profile__right'>
          <div>Header Profile</div>
          <div>Followers</div>
          <div className='other'>
            <p className='name'>{getUser.name}</p>
            
            {getUser.siteweb && (
            <a href={getUser.siteweb} className='siteweb'>
              {getUser.siteweb}
            </a> 
            )}

            {getUser.description && (
              <p className='description'>{getUser.description}</p>

            )}
           
           
         
          </div>
        </Grid.Column>
      </Grid>

      <ModelBasic show={true} setShow={null} title='Subir Avatar'>
        <p>Opciones...</p>
        <p>Opciones...</p>
        <p>Opciones...</p>
      </ModelBasic>
    </>
  )
}
