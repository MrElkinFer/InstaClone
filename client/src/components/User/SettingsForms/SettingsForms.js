import React from 'react';
import { Button } from 'semantic-ui-react';
import { useApolloClient} from '@apollo/client'; // se usa en este contexto para borrar la caché
import "./SettingsForms.scss";
import "../../../hooks/useAuth";
import useAuth from '../../../hooks/useAuth';
import PasswordForm from '../PasswordForm/PasswordForm';
import EmailForm from '../EmailForm/EmailForm';
import { useNavigate } from 'react-router-dom'; 


export default function SettingsForms(props) {
    const {setShowModal,setTitleModal, setChildenModal, currentEmail} = props;
    const {logout} = useAuth();
    const history = useNavigate(); // se calbio el useHistory por useNavuagate,
    const client =useApolloClient(); // se usa en este contexto para borrar la caché

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
        />);
    }

  return (
    <div className='settings-forms'>
      <Button onClick={onChangePassword}>Cambiar contraseña</Button>
      <Button onClick={onChangeEmail}>Cambiar email</Button>
      <Button>Descripción</Button>
      <Button>Sitio Web</Button>
      <Button onClick={onLogout}>Cerrar Sesión</Button>
      <Button onClick={() => setShowModal(false)}>Cancelar</Button>
    </div>
  )
}
