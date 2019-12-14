import React from "react";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Navigation from "./components/Navigation";
import NoMatch from "./components/NoMatch";
import CompanyList from "./components/CompanyList";
import EducationList from "./components/EducationList";
import ProjectList from "./components/ProjectList";
import SkillList from "./components/SkillList";

const client = new ApolloClient({
  uri: "http://localhost:4000"
});

const App = () => (
  <Router>
    <ApolloProvider client={client}>
      <Navigation />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/educations'>
          <EducationList />
        </Route>
        <Route path='/companies'>
          <CompanyList />
        </Route>
        <Route path='/projects'>
          <ProjectList />
        </Route>
        <Route path='/skills'>
          <SkillList />
        </Route>
        <Route path='*'>
          <NoMatch />
        </Route>
      </Switch>
    </ApolloProvider>
  </Router>
);

export default App;
