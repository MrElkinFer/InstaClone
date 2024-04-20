import React from 'react'
import  "./HeaderProfile.scss";
import { Button } from 'semantic-ui-react';
import { useQuery, useMutation } from '@apollo/client';
import { IS_FOLLOW, FOLLOW, UN_FOLLOW } from '../../../../gql/follow';

export default function HeaderProfile(props) {

    const {getUser, auth, handlerModal} = props;
    
    const query = useQuery( IS_FOLLOW, {// en el video (Vid. 118) se hace destructuring y queda así: const {data, loading}= useQuery(IS_FOLLOW, ...) 
      variables: {username: getUser.username},
    });

    console.log(query.data);// en el video (Vid. 118) se hace destructuring
    const [follow] = useMutation(FOLLOW);
    const [unFollow] = useMutation(UN_FOLLOW);

   

    const OnUnfollow = async ()=>{
      try {
        await unFollow({
          variables:{
            username: getUser.username,
          },
        });
        query.refetch(); // para hacer refresh en la pagina despues de darle en seguir.
      } catch (error) {
        console.log(error);
      }

    };

    const onFollow = async ()=> {
      try{
        await follow({
          variables:{
            username: getUser.username,
          },
        });
        query.refetch(); // para hacer refresh en la pagina despues de darle en seguir.
      }catch(error){
        console.log(error);
      }
    };

    const buttonFollow = ()=>{

      if (query.data.isFollow) {
        return(
          <Button className='btn-danger' onClick={OnUnfollow}>Dejar de seguir</Button>
        );
      } else {
        return(
          <Button className='btn-action' onClick={onFollow}>Seguir</Button>
        );
      }
    };



  return (  
    <div className='header-profile'>
        <h2>
            {getUser.username}
            {getUser.username === auth.username ? (<Button onClick={()=> {handlerModal("settings")}}>Ajustes</Button>):(!query.loading && buttonFollow())}
        </h2>
    </div>
  )
}
