import React, {useEffect, useState} from 'react';
import './Followes.scss';
import { useQuery } from '@apollo/client';
import { GET_FOLLOWERS } from '../../../../gql/follow';
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
    
    useEffect(()=>{

      startPollingFollowers(5000);

      return ()=> { stopPollingFollowers() }

    },[startPollingFollowers, stopPollingFollowers]);

    const openFollowers = ()=>{
      setTitleModal("Seguidores");
      setChildrenModal(<ListUsers users={getFollowers} setShowModal= {setShowModal}/>);
      setShowModal(true);
    }
  
    if(loadingFollowers) return null;
    const {getFollowers} = dataFollowers;
    //console.log(getFollowers);


  return (
    <>
    <div className='followers'>
      <p><span>123</span> Publicaciones</p>
      <p className='link' onClick={openFollowers}><span >{size(getFollowers)}</span> Seguidores</p>
      <p className='link'><span>123</span> Seguidos</p>
    </div>
    <ModalBasic show={showModal} setShow={setShowModal} title={titleModal} >
      {childrenModal}
    </ModalBasic>
    </>
  )
}
