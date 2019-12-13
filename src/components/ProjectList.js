import React from "react";
import { Query } from "react-apollo";

import Project from "./Project";
import { GET_PROJECTS } from '../queries/project';

const ProjectList = () => (
  <div>
    <h2>Projects</h2>
    <Query query={GET_PROJECTS}>
      {({ loading, error, data }) => {
        if (loading) return "Loading...";
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
  </div>
);

export default ProjectList;
