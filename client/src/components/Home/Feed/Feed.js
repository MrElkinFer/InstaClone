import React, { useState, useEffect } from 'react';
import {useQuery} from '@apollo/client';
import { Image } from 'semantic-ui-react';
import {map} from 'lodash';
import {GET_PUBLICATIONS_FOLLOWEDS} from '../../../gql/publication';
import ImageNoFound from '../../../assets/png/avatar.png';
import Actions from '../../Modal/ModalPublication/Actions'; 
import CommentForm from '../../Modal/ModalPublication/CommentForm';
import ModalPublication from '../../Modal/ModalPublication/ModalPublication';
import './Feed.scss';

export default function Feed() {
    const {data, loading, startPolling, stopPolling} = useQuery(GET_PUBLICATIONS_FOLLOWEDS);
    const [showModal, setShowModal] = useState(false);// Para publicar en el modal de publicaciones
    const [publicationSelec, setPublicationSelect] = useState(null);// Para publicar en el modal de publicaciones

    useEffect(()=>{ 
      startPolling(1000);
      return ()=>{
        stopPolling();
      };},[startPolling,stopPolling]);

    if(loading) return null;
    const {getPublicationsFolloweds}= data;


    const openPublication = (publication)=>{// Para publicar en el modal de publicaciones
      setPublicationSelect(publication)      
      setShowModal(true)
    }
    console.log(getPublicationsFolloweds);


  return (
    <>
    <div className='feed'>
      {map(getPublicationsFolloweds,(publication, index) => (
        <div key={index} className='feed__box'>
            <a href={`/${publication.idUser.username}`}>
                <div className='feed__box-user'>
                    <Image src={publication.avatar || ImageNoFound} avatar/>
                    <span>{publication.idUser.name}</span>
                                                           
                </div>
            </a>
            <div onClick={()=> openPublication(publication)} className='feed__box-photo' style={{backgroundImage: `url("${publication.file}")`} }/>
            <div className='feed__box-action'>
                <Actions  publication={publication}/>
            </div>
            <div className={'feed__box-form'}>
                <CommentForm  publication={publication}/>
            </div>
            
            
        </div>
      ))}
    </div>
    {
      showModal && (
        <ModalPublication
          publication= {publicationSelec} 
          show={showModal}
          setShow={setShowModal}
        />
      )
    }
    </>
  )
}
