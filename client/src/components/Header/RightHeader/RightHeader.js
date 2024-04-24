import React, {useState} from 'react';
import "./RightHeader.scss";
import {Icon, Image} from "semantic-ui-react";
import useAuth from "../../../hooks/useAuth";
import imageNoFound from "../../../assets/png/avatar.png";
import ModalUpload from '../../Modal/ModalUpload/ModalUpload'; // vid 132
//import { Link } from 'react-router-dom';

export default function RightHeader() {
  const[showModal, setShowModal]= useState(false);
  const {auth} = useAuth();
  //console.log(auth);
  
  return (
    <>
      <div className='right-header'>
          <a href='/'>
              <Icon name='home'/>
          </a>
          
          <Icon name='plus' onClick = {() => setShowModal(true)}/>
          
          <a href={auth.username} >
            <Image src={imageNoFound} avatar/>
          </a>
      </div>
      
      <ModalUpload show = {showModal} setShow ={setShowModal}/>
    </>
  )
}
