import React from 'react';
import "./Home.scss";
import { Link } from 'react-router-dom';
import { Container,Grid} from 'semantic-ui-react';


export default function Home() {

  return (
    <div className='home'>
      <Container>
        <Grid>
          <Grid.Column width={3}>
            <Link to={"/fer"}>Estamos en la HOME</Link> 
          </Grid.Column>
        </Grid>
        
      </Container>
    </div>
  )
}
