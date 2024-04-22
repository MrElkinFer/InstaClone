import React, {useEffect} from 'react';
import './Followes.scss';
import { useQuery } from '@apollo/client';
import { GET_FOLLOWERS } from '../../../../gql/follow';
import {size} from 'lodash';


export default function Followes(props) {
    const {username} = props;
    
    const {data: dataFollowers, loading: loadingFollowers, startPolling: startPollingFollowers, stopPolling: stopPollingFollowers} = useQuery(GET_FOLLOWERS,{
      variables:{ username }
    });
    
    useEffect(()=>{

      startPollingFollowers(5000);

      return ()=> { stopPollingFollowers() }

    },[startPollingFollowers, stopPollingFollowers]);
  
    if(loadingFollowers) return null;
    const {getFollowers} = dataFollowers;
    console.log(getFollowers);


  return (
    <div className='followers'>
      <p><span>123</span> Publicaciones</p>
      <p className='link'><span >{size(getFollowers)}</span> Seguidores</p>
      <p className='link'><span>123</span> Seguidos</p>
    </div>
  )
}
