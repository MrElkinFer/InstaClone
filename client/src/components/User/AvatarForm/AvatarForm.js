import React from 'react';
import "./AvatarForm.scss";
import { Button } from 'semantic-ui-react';


export default function AvatarForm(props) {
    const {setShowModal} = props; 
  return (
    <div className='avatar-form'>
        <Button>Cargar una foto</Button>
        <Button>Eliminar Foto actual</Button>
        <Button>Cancelar onClick={setShowModal(false)}</Button>
    </div>
  )
}
