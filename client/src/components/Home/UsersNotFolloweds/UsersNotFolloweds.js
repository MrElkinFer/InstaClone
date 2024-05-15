import React from 'react';
import './UsersNotFolloweds.scss';
import { GET_NOT_FOLLOWEDS } from '../../../gql/follow';
import { useQuery } from '@apollo/client';
import { Image } from 'semantic-ui-react';
import { map } from 'lodash';
import ImageNoFound from '../../../assets/png/avatar.png';


export default function UsersNotFolloweds() {
    const {data, loading} = useQuery(GET_NOT_FOLLOWEDS);
    if(loading) return null;

    const {getNotFolloweds}= data;
    console.log(getNotFolloweds);

  return (
    <div className='users-not-followeds'>
        <h3>Usuarios que no sigues aún</h3>
        {map(getNotFolloweds, (user, index)=> (
            <a key={index} href = {`/${user.username}`} className='users-not-followeds__user'>
                <Image src={user.avatar || ImageNoFound } avatar/>
                <span>{user.username}</span>
            </a>

        ))};
    </div>
  )
}
