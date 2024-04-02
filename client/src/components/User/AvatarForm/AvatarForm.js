import React, {useCallback} from 'react';
import "./AvatarForm.scss";
import { Button } from 'semantic-ui-react';
import { useDropzone } from 'react-dropzone';
import {useMutation} from '@apollo/client';
import {UPDATE_AVATAR} from '../../../gql/user';

export default function AvatarForm(props) {
    const {setShowModal} = props;

    const [updateAvatar]= useMutation(UPDATE_AVATAR);

    //const onDrop = useCallback((acceptedFile)=> {console.log(acceptedFile);},[])
    const onDrop = useCallback( async (acceptedFile)=>{
        const file = acceptedFile[0];

        try {
            console.log(file); 
            const result = await updateAvatar({variables:{file}});
            console.log(result);
            
        } catch (error) {
            console.log(error);            
        }
    }, []);

const {getRootProps,getInputProps} = useDropzone({ 
    accept:"image/jpge, image/png",  ///tipo de archivos que se aceptan
    noKeyboard: true, // para que no se despliege el teclado 
    multiple:false, // Para que solo se pueda subir uno
    onDrop,
});

  return (
    <div className='avatar-form'>
        <Button {...getRootProps()}>Cargar una foto</Button>
        <Button>Eliminar Foto actual</Button>
        <Button  onClick ={()=>setShowModal(false)}>Cancelar</Button>
        <input {...getInputProps()}/>
    </div>
  )
}
