import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import Company from "./Company";

const GET_COMPANIES = gql`
  {
    companies {
      id
      title
      started_at
      ended_at
    }
  }
`;

const CompanyList = () => (
  <div>
    <h2>Companies</h2>
    <Query query={GET_COMPANIES}>
      {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error: ${error.message}`;

        return (
          <ul>
            {data.companies.map(company => (
              <Company data={company} />
            ))}
          </ul>
        );
      }}
    </Query>
  </div>
);

export default CompanyList;
