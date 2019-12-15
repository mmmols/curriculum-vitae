import React from "react";

import { Grid, Container, Header } from "semantic-ui-react";

import Navigation from "./components/Navigation/Navigation";
import Routing from "./components/Routing";

const App = () => (
  <Container>
    <Grid>
      <Grid.Column width='4'>
        <Header as='h2'>Mike Mols' CV</Header>
        <Navigation />
      </Grid.Column>
      <Grid.Column width='12'>
        <Routing />
      </Grid.Column>
    </Grid>
  </Container>
);

export default App;
