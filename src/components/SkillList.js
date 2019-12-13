import React from "react";
import { Query } from "react-apollo";

import Skill from "./Skill";
import { GET_SKILLS } from "../queries/skill";

const SkillList = () => (
  <div>
    <h2>Skills</h2>
    <Query query={GET_SKILLS}>
      {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error: ${error.message}`;

        return (
          <ul>
            {data.skills.map(skill => (
              <Skill key={skill.id} data={skill} />
            ))}
          </ul>
        );
      }}
    </Query>
  </div>
);

export default SkillList;
