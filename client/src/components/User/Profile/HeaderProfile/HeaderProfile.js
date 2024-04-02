import React from 'react'
import  "./HeaderProfile.scss";
import { Button } from 'semantic-ui-react';

export default function HeaderProfile(props) {

    const {getUser,auth} = props;
    
  return (
    <div className='header-profile'>
        <h2>
            {getUser.username}
            {getUser.username === auth.username ? (<Button>Ajustes</Button>):(<Button>Seguir</Button>)}
        </h2>
    </div>
  )
}
