import React, {useCallback} from 'react';
import "./AvatarForm.scss";
import { Button } from 'semantic-ui-react';
import { useDropzone } from 'react-dropzone';




export default function AvatarForm(props) {
    const {setShowModal} = props; 

    const onDrop =useCallback((acceptedFile)=>{
        console.log(acceptedFile);
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
