import React from 'react';
import "./EmailForm.scss";
import { Button, Form } from 'semantic-ui-react';
import { useMutation } from '@apollo/client';
import "../../../gql/user";
import * as  yup from 'yup';
import { useFormik } from 'formik';
import {toast} from 'react-toastify';
import { UPDATE_USER } from '../../../gql/user';




export default function EmailForm(props) {


    const { currentEmail, setShowModal, refetch } = props;

    const [ updateUser] = useMutation(UPDATE_USER);

    //console.log( currentEmail );

    const formik = useFormik({
        initialValues: {
            email: currentEmail || "",
        },
        validationSchema: yup.object({    
            email: yup.string().email("Ingresa un correo valido").required("El correo es obligatorio"),
        }),
    
        onSubmit: async (formData) => {
            //console.log(formData);

            try {
                const result = await updateUser({
                    variables:{
                        input: {
                            email: formData.email,
                        }
                    }
                })

                if(!result.data.updateUser){
                    toast.error("Pudo ocurrir Algo");
                }else{
                    toast.success("Cambio con éxito");
                }
                refetch();
                setShowModal(false);//para cerrar el modal
                                
            } catch (error) {
                toast.error("¡Algo ha fallado!!!");
            }
        },
        })


  return (
    <Form className='email-form' onSubmit={formik.handleSubmit}>
        <Form.Input 
            placeholder="Escribe tu nuevo correo" 
            name="email" 
           value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.errors.email && true}
        />
        <Button type='submit' className='btn-submit'>Actualizar</Button>
    </Form>

    
    
  )
}

