import React from 'react';
import { Button } from 'semantic-ui-react';
import { useApolloClient} from '@apollo/client'; // se usa en este contexto para borrar la caché
import "./SettingsForms.scss";
import "../../../hooks/useAuth";
import useAuth from '../../../hooks/useAuth';
import PasswordForm from '../PasswordForm/PasswordForm';
import EmailForm from '../EmailForm/EmailForm';
import DescriptionForm from '../DescriptionForm/DescriptionForm';
import WebsiteForm from '../websiteForm/WebsiteForm';
import { useNavigate } from 'react-router-dom'; 


export default function SettingsForms(props) {
    const {setShowModal,setTitleModal, setChildenModal, currentEmail, refetch, currentDescription, curretSiteweb} = props;
    const {logout} = useAuth();
    const history = useNavigate(); // se cambio el useHistory por useNavuagate,
    const client =useApolloClient(); // se usa en este contexto para borrar la caché

    //console.log(curretSiteweb);

    const onLogout = () => {
      client.clearStore();
        logout();
        history("/");
    };

    const onChangePassword = () => {
      setTitleModal("Cambio de contraseña");
      setChildenModal(<PasswordForm/>);
    };

    const onChangeEmail = () => {
      setTitleModal("Cambio de email");
      setChildenModal(<EmailForm 
        setShowModal={setShowModal}
        currentEmail={currentEmail}
        refetch ={refetch}
        />);
    }

    const onDescription = () => {
      setTitleModal("Nueva Descripción")
      setChildenModal(<DescriptionForm
        setShowModal={setShowModal}
        currentDescription= {currentDescription}
        refetch={refetch}      
      />)
    }

    const onWebsite = () => {
      setTitleModal("Actualización de Sitio Web")
      setChildenModal(<WebsiteForm
        curretSiteweb= {curretSiteweb}
        refetch={refetch}
        setShowModal={setShowModal}
      />)
      
    }

  return (
    <div className='settings-forms'>
      <Button onClick={onChangePassword}>Cambiar contraseña</Button>
      <Button onClick={onChangeEmail}>Cambiar email</Button>
      <Button onClick={onDescription}>Descripción</Button>
      <Button onClick={onWebsite}>Sitio Web</Button>
      <Button onClick={onLogout}>Cerrar Sesión</Button>
      <Button onClick={() => setShowModal(false)}>Cancelar</Button>
    </div>
  )
}
