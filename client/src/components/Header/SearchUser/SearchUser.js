import React, {useState, useEffect}  from 'react'; // importamos también el useState
import "./SearchUser.scss";
import { size } from 'lodash'; // para ver el tamaño de un array el del useEffect que hacemos.
import { Search } from 'semantic-ui-react';
import { useQuery } from '@apollo/client';// traemos la query
import { SEARCH } from '../../../gql/user'; //traemos la petición de search

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
      onSearchChange={onChange}
      
    />
  );
}

