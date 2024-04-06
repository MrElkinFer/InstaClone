import React from 'react';
import './DescriptionForm.scss';
import {Form, TextArea, Button} from 'semantic-ui-react';
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../../../gql/user';
import * as yup from 'yup';
import { useFormik } from 'formik';
import {toast} from 'react-toastify';



export default function DescriptionForm(props) {

  //Argumentos de setting form:
  const {refetch, currentDescription, setShowModal } = props;

  //Mutation para la actualización de la descripción:
  const [updateUser] = useMutation(UPDATE_USER);

  //Validación con formik y Yup:
  const formik = useFormik({
    initialValues: {
      description: "" || currentDescription,
    },
   
    validationSchema: yup.object({
      description: yup.string(),
    }),
    
    onSubmit: async (formData)=>{
      
      try {
        await updateUser({
          variables:{
            input: {
              description: formData.description,//Porqué el mismo? 
          }
          }
        })
        
        // se refresca el caché de la página
        refetch();

        // Se cierra el modal
        setShowModal(false);
        
        //Toast cambio descripción exitosa:
        toast.success("El cambio de descripción ha sido exitoso");
        
      } catch (error) {
        toast.error("Algo pasa con la descripción");
      }
    }
    
  })


  // Componente de cambio de descripción:
  return (
    <Form className='description-form' onSubmit={formik.handleSubmit}>
        <TextArea
          name= "description"
          value={formik.values.description}
          onChange={formik.handleChange}
          error={formik.errors.description && true}
          
        />
        <Button type='submit' className='btn-submit'> Enviar</Button>
    </Form>
  )
}
