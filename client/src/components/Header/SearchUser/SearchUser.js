import React from 'react';
import "./SearchUser.scss";
import {Search} from 'semantic-ui-react';

export default function SearchUser() {
  return (
    <Search
    className='search-users'
    fluid
    input = { {icon:"search",iconPosition: "left"}} 

    />
  )
}
