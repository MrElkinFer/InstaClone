import React, { useState} from 'react';
import { Image } from 'semantic-ui-react';
import "./PreviewPublication.scss";
import ModalPublication from '../../Modal/ModalPublication';



export default function PreviewPublication(props) {
  const {publication} = props;

  const [showModal,setShowModal] = useState(false);
  //console.log(publication);

    return (
    <>
    <div className='preview-publication' onClick={() => setShowModal(true)}>
        <Image className='preview-publication__image' src={publication.file}/>

    </div>

    <ModalPublication show={showModal} setShow={setShowModal} publication={publication}/>

    </>
  )
}
