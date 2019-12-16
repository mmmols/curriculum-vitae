import React from "react";
import { Query } from "react-apollo";
import { Container, Item, Header, Loader, Segment } from "semantic-ui-react";

import { GET_COMPANIES } from "../../queries/company";

import Company from "./Company";

export const CompanyList = ({ segmented }) => (
  <Container>
    <Segment className={segmented ? "" : "display-none"}>
      <Header as='h2'>Companies</Header>
      <Query query={GET_COMPANIES}>
        {({ loading, error, data }) => {
          if (loading) return <Loader active inline='centered' />;
          if (error) return `Error: ${error.message}`;

          return (
            <Item.Group>
              {data.companies.map(company => (
                <Company key={company.id} data={company} />
              ))}
            </Item.Group>
          );
        }}
      </Query>
    </Segment>
  </Container>
);

export default CompanyList;
