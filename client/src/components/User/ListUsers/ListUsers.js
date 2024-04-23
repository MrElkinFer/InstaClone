import React from 'react';
import { size, map } from 'lodash';
import { Image } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom'; // se cambio el useHistory por useNavuagate,
import "./ListUsers.scss";
import ImageNoFound from '../../../assets/png/avatar.png'; 



export default function ListUsers(props) {
    const {users, setShowModal} = props;
    const history = useNavigate(); // se cambio el useHistory por useNavuagate,
    //console.log(users);

    const goToUser = (username) =>{
        setShowModal(false);
        history(`/${username}`); // se cambia el history.push() por tan solo history()
    }
    
  return (
    <div className='list-users'>
        {size(users) === 0 ? (
            <p className='list-users__not-users'>No se han encontrado usuarios</p>
        ) : (
            map(users,(users, index) => (
            <div key={index} className='list-users__user' onClick={()=> goToUser(users.username)}>
                <Image src= {users.avatar || ImageNoFound} avatar/>
            <div>
                <p>{users.name}</p>
                <p>{users.username}</p>
            </div>
            </div>))
        )}
    </div>
  );
}
