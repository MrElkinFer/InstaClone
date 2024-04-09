import React from 'react'
import "./Header.scss";
import {Container, Image, Grid} from "semantic-ui-react";
import logo from "../../assets/png/instaclone.png";
import SearchUser from './SearchUser';


import RightHeader from './RightHeader';



export default function Header() {
  return (
    <div className='header'>
      <Container >
        
        <Grid>
          <Grid.Column width={3}className='header__logo'>
            
            <a href='/'> 
              <Image src={logo} alt= "Instaclone"/>
            </a>
          </Grid.Column>
          <Grid.Column width={10}>
            <SearchUser/>
          </Grid.Column>
          <Grid.Column width={3}>
           <RightHeader/>
          </Grid.Column>
            
        </Grid>
      </Container>       
      
    </div>
  )
}
