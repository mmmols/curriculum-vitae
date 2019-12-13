import React from "react";
import { Query } from "react-apollo";

import Company from "./Company";
import { GET_COMPANIES } from '../queries/company';

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
              <Company key={company.id} data={company} />
            ))}
          </ul>
        );
      }}
    </Query>
  </div>
);

export default CompanyList;
