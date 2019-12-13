import React from "react";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import CompanyList from './components/CompanyList';

const client = new ApolloClient({
  uri: "http://localhost:4000"
});

const App = () => {
  return (
    <div className='App'>
      <ApolloProvider client={client}>
        <CompanyList />
      </ApolloProvider>
    </div>
  );
}

export default App;
