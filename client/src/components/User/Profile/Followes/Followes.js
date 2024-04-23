import React, {useEffect, useState} from 'react';
import './Followes.scss';
import { useQuery } from '@apollo/client';
import { GET_FOLLOWERS, GET_FOLLOWEDS } from '../../../../gql/follow';
import {set, size} from 'lodash';
import ModalBasic from '../../../Modal/ModalBasic';
import ListUsers from '../../ListUsers/ListUsers';


export default function Followes(props) {
    const {username} = props;

    const [showModal, setShowModal] = useState(false);
    const [titleModal, setTitleModal] = useState("");
    const [childrenModal,setChildrenModal]= useState(null);
    
    const {data: dataFollowers, loading: loadingFollowers, startPolling: startPollingFollowers, stopPolling: stopPollingFollowers} = useQuery(GET_FOLLOWERS,{
      variables:{ username }
    });

    const {data: dataFolloweds, loading: loadingFolloweds, startPolling: startPollingFolloweds, stopPolling: stopPollingFolloweds} = useQuery(GET_FOLLOWEDS,{
      variables:{username},
    });
    
    useEffect(()=>{

      startPollingFollowers(5000);

      return ()=> { stopPollingFollowers() }

    },[startPollingFollowers, stopPollingFollowers]);

    useEffect(()=>{
      startPollingFolloweds(5000);

      return()=> {
        stopPollingFolloweds();
      };    
    },[startPollingFolloweds,startPollingFolloweds]);

    const openFollowers = ()=>{
      setTitleModal("Seguidores");
      setChildrenModal(<ListUsers users={getFollowers} setShowModal= {setShowModal}/>);
      setShowModal(true);
    }

    const openFolloweds = ()=> {
      setShowModal("Seguidos");
      setChildrenModal(<ListUsers users={getFolloweds} setShowModal= {setShowModal}/>)
    }
  
    if(loadingFollowers || loadingFolloweds) return null;
    const { getFollowers } = dataFollowers;
    const { getFolloweds } = dataFolloweds;
    //console.log(getFollowers);


  return (
    <>
    <div className='followers'>
      <p><span>123</span> Publicaciones</p>
      <p className='link' onClick={openFollowers}><span >{size(getFollowers)}</span> Seguidores</p>
      <p className='link' onClick={openFolloweds}><span>{size(getFolloweds)}</span> Seguidos</p>
    </div>
    <ModalBasic show={showModal} setShow={setShowModal} title={titleModal} >
      {childrenModal}
    </ModalBasic>
    </>
  )
}
