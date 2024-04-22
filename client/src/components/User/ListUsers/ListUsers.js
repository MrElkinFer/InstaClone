import React from 'react';
import { size, map } from 'lodash';
import "./ListUsers.scss";


export default function ListUsers(props) {
    const {user, setShowModal} = props;
    
  return (
    <div className='list-users'>
        {size(user) === 0 ? (<p className='list-users__not-users'>No se han encontrado usuarios</p>
    ):(
        map(user,(user, index) => (
        <div key={index}>
            <h2>
                {user.name}
            </h2>
        </div>))
    )}
    </div>
  );
}
