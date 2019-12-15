import React from "react";
import { Query } from "react-apollo";
import { Container, Item, Header, Loader, Segment } from "semantic-ui-react";

import Company from "./Company";
import { GET_COMPANIES } from "../../queries/company";

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
              {data.companies.map(entity => (
                <Company key={entity.id} data={entity} />
              ))}
            </Item.Group>
          );
        }}
      </Query>
    </Segment>
  </Container>
);

export default CompanyList;
