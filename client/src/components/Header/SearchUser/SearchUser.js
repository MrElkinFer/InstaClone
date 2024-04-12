import React, {useState, useEffect}  from 'react'; // importamos también el useState
import "./SearchUser.scss";
import { size } from 'lodash'; // para ver el tamaño de un array el del useEffect que hacemos.
import { Search, Image } from 'semantic-ui-react';
import { useQuery } from '@apollo/client';// traemos la query
import { SEARCH } from '../../../gql/user'; //traemos la petición de search
import imageNoFound from '../../../assets/png/avatar.png';

export default function SearchUser() {
   
  //
    const [ search, setSearch ] = useState(null);//es mejor inicializar en null para no tener problemas al iniciar con todos los valores: "" 
    const [ results, setResults ] = useState([]);
    const { data, loading } = useQuery(SEARCH, {
      variables:{ search },// si la llamo igual que seach no  hay problema y puedo llamarla así no más: "varibles: {search}" pero es mejor que primero entienda que es así.
    });
 
    console.log(results);
    

    useEffect(() => {

      if (size(data?.searchUser) > 0) {
        const users =[];
        data.searchUser.forEach((user, index) => {
          users.push({key: index,
          title: user.name,
          username: user.username,
          avatar: user.avatar,
        });
          
        });
        
      setResults(users);

      }else{
        setResults([]);
        
      }

    },[data])

    
    
    const onChange= (e) => {
      if(e.target.value){setSearch(e.target.value)}
      else setSearch(null);
    };


  return (
    <Search
      className='search-users'
      fluid
      input = { {icon:"search", iconPosition: "left"}}
      loading= {loading}
      onSearchChange={onChange}
      value={search || ""}
      results={results}
      resultRenderer={(e)=><ResultsSearch data ={e}/>}
    />
  );
}

function ResultsSearch(props){
  const {data} = props;
  console.log(data);  
  
  return(
      <a  className='search-users__item' href={`/${data.username}`}>
        <Image src= {data.avatar || imageNoFound}/>
        <div>
          <p>{data.title}</p>
          <p>{data.username}</p>
        </div>
      </a>
      
      );
  
}
