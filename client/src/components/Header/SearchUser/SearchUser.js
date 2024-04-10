import React, {useState}  from 'react'; // importamos también el useState
import "./SearchUser.scss";
import { Search } from 'semantic-ui-react';
import { useQuery } from '@apollo/client';// traemos la query
import { SEARCH } from '../../../gql/user'; //traemos la petición de search

export default function SearchUser() {
   
  //
    const [searchi, setSearchi] = useState(null)//es mejor inicializar en null para no tener problemas al iniciar con todos los valores: ""
    console.log(searchi);     // Estado para:
    const {data,loading} = useQuery(SEARCH, {
      variables:{ search: searchi},// si la llamo igual que seach no  hay problema y puedo llamarla así no más: "varibles: {search}" pero es mejor que primero entienda que es así.

    });

    console.log(data);
    
    const onChange = (e)=>{
      if(e) setSearchi(e.target.value);
      else setSearchi(null);
    }


  return (
    <Search
      className='search-users'
      fluid
      input = { {icon:"search", iconPosition: "left"}}
      onSearchChange={onChange}
    />
  )
}

