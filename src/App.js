import React from "react";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import CompanyList from "./components/CompanyList";
import EducationList from "./components/EducationList";
import Project from "./components/ProjectList";
import Skills from "./components/SkillList";

const client = new ApolloClient({
  uri: "http://localhost:4000"
});

const App = () => {
  return (
    <div className='App'>
      <ApolloProvider client={client}>
        <CompanyList />
        <EducationList />
        <Project />
        <Skills />
      </ApolloProvider>
    </div>
  );
};

export default App;
