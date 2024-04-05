import React, { useState } from 'react';
import {Grid, Image} from "semantic-ui-react";
import "./Profile.scss";
import { useQuery } from '@apollo/client';// para hacer el get de obtener datos
import { GET_USER } from '../../../gql/user';
import imageNoFound from "../../../assets/png/avatar.png";
import UserNotFound from '../../UserNoFound';
import ModelBasic from '../../Modal/ModalBasic';
import AvatarForm from '../AvatarForm'; 
import useAuth from '../../../hooks/useAuth';
import SettingsForms from '../SettingsForms/SettingsForms';
import HeaderProfile from './HeaderProfile';



export default function Profile(props) {

  const {username} = props;
  
  const {data, loading, error, refetch}= useQuery(GET_USER, {
    variables:{username},
  });

  const [showModal, setShowModal] = useState(false); // estado para el ModelBasic emergente.
  const [titleModal, setTitleModal]= useState("");
  const [childrenModal, setChildenModal] = useState(null);
  const {auth} =useAuth();

  

  if(loading)return null; // si no ha cargado no renderiza la pantalla: loading === false
  if(error) return <UserNotFound/> 

  const {getUser}= data;// aquí estan los datos del usuario

 // console.log(getUser.email);

  const handlerModal = (type)=>{
    switch (type) {
      case "avatar":
        setTitleModal("Cambiar foto de PERFIL");
        setChildenModal(<AvatarForm setShowModal={setShowModal}/>);// se le pasa la propiedad del hook useState para que cierre el Model de cambio de foto de avatar con el botón cerrar 
        setShowModal(true);
        break;

      case "settings":
        setTitleModal("Ajustes del Perfil");
        setChildenModal(<SettingsForms 
          setShowModal ={setShowModal}  
          setTitleModal={setTitleModal} 
          setChildenModal={setChildenModal}
          currentEmail = {getUser.email}
          refetch ={refetch}
          />);
        setShowModal(true);
        break;
    
      default:
        break;
    }
  };

  return (

    <>
      <Grid className='profile'>
        <Grid.Column width={5} className='profile__left'>
          <Image src={imageNoFound} avatar onClick={()=> username === auth.username && handlerModal("avatar")}/>
        </Grid.Column>
        <Grid.Column width={11} className='profile__right'>
          <HeaderProfile getUser ={getUser} auth={auth} handlerModal={handlerModal}/>
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

      <ModelBasic show={showModal} setShow={setShowModal} title={titleModal}>
        {childrenModal}
      </ModelBasic>
    </>
  )
}
