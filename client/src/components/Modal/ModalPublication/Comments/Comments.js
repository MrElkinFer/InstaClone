import React from 'react';
import './Comments.scss';
import { GET_COMMENT } from '../../../../gql/comment';
import { useQuery } from '@apollo/client';
import { Image } from 'semantic-ui-react';
import { map } from 'lodash';
import ImageNoFound from '../../../../assets/png/avatar.png';

export default function Comments(props) {
    const {publication} = props;
    const {data, loading} = useQuery(GET_COMMENT, {
        variables:{
            idPublication: publication.id,
        },
});
if(loading) return null;

const {getComments} = data;

console.log(getComments.idUser);

  return (  
    <div className='comments'>
        {
            map(getComments, (comment, index) =>(
            <a key={index} href={`/${comment.idUser.username}`} className='comment'>
                <Image src={comment.idUser.avatar || ImageNoFound} avatar/>
                 <div>
                    <p>{comment.idUser.username}</p>
                    <p>{comment.comment}</p>
                   
                 </div>
            </a>

            ))}
    </div>
  )
}
