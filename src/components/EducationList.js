import React from "react";
import { Query } from "react-apollo";

import Education from "./Education";
import { GET_EDUCATIONS } from "../queries/education";

const EducationList = () => (
  <div>
    <h2>Educations</h2>
    <Query query={GET_EDUCATIONS}>
      {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error: ${error.message}`;

        return (
          <ul>
            {data.educations.map(education => (
              <Education key={education.id} data={education} />
            ))}
          </ul>
        );
      }}
    </Query>
  </div>
);

export default EducationList;
