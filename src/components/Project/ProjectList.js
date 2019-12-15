import React from "react";
import { Query } from "react-apollo";

import Project from "./Project";
import { GET_PROJECTS } from "../../queries/project";

import { Container, Header, Loader, Segment } from "semantic-ui-react";

const ProjectList = ({ segmented }) => (
  <Container>
    <Segment className={segmented ? "" : "display-none"}>
      <Header as='h2'>Projects</Header>
      <Query query={GET_PROJECTS}>
        {({ loading, error, data }) => {
          if (loading) return <Loader active inline='centered' />;
          if (error) return `Error: ${error.message}`;

          return (
            <ul>
              {data.projects.map(project => (
                <Project key={project.id} data={project} />
              ))}
            </ul>
          );
        }}
      </Query>
    </Segment>
  </Container>
);

export default ProjectList;
