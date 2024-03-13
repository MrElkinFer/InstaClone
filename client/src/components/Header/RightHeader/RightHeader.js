import React from 'react';
import "./RightHeader.scss";
import {Icon, Image} from "semantic-ui-react";

//import useAuth from "../../../hooks/useAuth";
import imageNoFound from "../../../assets/png/avatar.png";
//import { Link } from 'react-router-dom';

export default function RightHeader() {
  //const {auth} = useAuth();
  
  //console.log(data);
  return (
    <div className='right-header'>
        <a href='/'>
            <Icon name='home'/>
        </a>
        <a>
            <Icon name='plus'/>
        </a>
        <a href='/user' >
          <Image src={imageNoFound} avatar />
        </a>
            
        
    </div>
  )
}
