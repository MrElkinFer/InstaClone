import React from 'react';
import "./Home.scss";
import Feed from '../../components/Home/Feed';

import { Container, Grid, GridColumn } from 'semantic-ui-react';


export default function Home() {

  return (
    <div className='home'>
      <Container>
        <Grid>
          <Grid.Column className='home__left' width={11}>
            <Feed/>
          </Grid.Column>
          <Grid.Column className='home__right' width={5}>
            <div>Usuarios por Seguir</div>
            </Grid.Column>
        </Grid>
        
      </Container>
    </div>
  )
}
