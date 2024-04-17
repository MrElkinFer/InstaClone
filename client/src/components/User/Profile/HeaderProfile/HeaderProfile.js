import React from 'react'
import  "./HeaderProfile.scss";
import { Button } from 'semantic-ui-react';
import { useQuery, useMutation } from '@apollo/client';
import { IS_FOLLOW, FOLLOW } from '../../../../gql/follow';

export default function HeaderProfile(props) {

    const {getUser,auth, handlerModal} = props;
    const { data, loading } = useQuery(IS_FOLLOW,{
      variables:{username: getUser.username},
    });
    const[follow] = useMutation(FOLLOW);

    //console.log(data);

    const buttonFollow = ()=>{
      if(data.isFollow){
        return <Button className='btn-danger'>Dejar de seguir</Button>
      }else{
        return <Button className='btn-action' onClick={onFollow}>Seguir</Button>
      }
    };

    const onFollow = async () => {
      try {
        await follow({
          variables:{
            username: getUser.username,
          }
        });
      } catch (error) {
        console.log(error)
      }

    };

  return (
    <div className='header-profile'>
        <h2>
            {getUser.username}
            {getUser.username === auth.username ? (<Button onClick={()=> {handlerModal("settings")}}>Ajustes</Button>):(!loading && buttonFollow())}
        </h2>
    </div>
  )
}
