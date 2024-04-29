import React, {useEffect} from 'react'
import Profile from '../components/User/Profile';
import { useQuery } from '@apollo/client';
import { size } from 'lodash';
import {useParams} from "react-router-dom";
import { GET_PUBLICATIONS } from '../gql/publication';
import Publications from '../components/Publications';

export default function User() {
  const {username} = useParams();
  const {data, loading, startPolling, stopPolling} = useQuery(GET_PUBLICATIONS, { 
    variables:{username}
  });

  useEffect(()=>{
    startPolling(5000);
    return () => {stopPolling()}
  },[startPolling,startPolling])


  if(loading) return null;

  const {getPublications} = data;
  console.log(size(getPublications));

  return (
    <>
      <Profile username= {username} totalPublications= {size(getPublications)}/>
      <Publications getPublications={getPublications}/>

    </>
  )
}
