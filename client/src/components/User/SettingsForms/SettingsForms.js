import React from 'react';
import { Button } from 'semantic-ui-react';
import "./SettingsForms.scss";
import "../../../hooks/useAuth";
import useAuth from '../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom'; 


export default function SettingsForms(props) {
    const {setShowModal} = props;
    const {logout} = useAuth();
    const history = useNavigate();

    const onLogout = () => {
        logout();
       //    history.push("/");
    };

  return (
    <div className='settings-forms'>
      <Button>Cambiar contraseña</Button>
      <Button>Cambiar email</Button>
      <Button>Descripción</Button>
      <Button>Sitio Web</Button>
      <Button onClick={onLogout}>Cerrar Sesión</Button>
      <Button onClick={() => setShowModal(false)}>Cancelar</Button>
    </div>
  )
}
