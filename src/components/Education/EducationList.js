import React from "react";
import { Query } from "react-apollo";
import {
  Grid,
  Loader,
  Container,
  Header,
  Segment,
  Accordion
} from "semantic-ui-react";

import Education from "./Education";
import { GET_EDUCATIONS } from "../../queries/education";

const EducationList = ({ segmented }) => (
  <Container>
    <Segment className={segmented ? "" : "display-none"}>
      <Header as='h2'>Educations</Header>
      <Query query={GET_EDUCATIONS}>
        {({ loading, error, data }) => {
          if (loading) return <Loader active inline='centered' />;
          if (error) return `Error: ${error.message}`;

          return (
            <Grid.Row>
              <Accordion>
                {data.educations.map((education, index) => (
                  <Education
                    key={education.id}
                    data={education}
                    index={index}
                  />
                ))}
              </Accordion>
            </Grid.Row>
          );
        }}
      </Query>
    </Segment>
  </Container>
);

export default EducationList;
