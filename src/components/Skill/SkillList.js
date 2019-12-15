import React from "react";
import { Query } from "react-apollo";
import { Container, Header, Loader, Segment } from "semantic-ui-react";

import Skill from "./Skill";
import { GET_SKILLS } from "../../queries/skill";

import "./index.scss";

const SkillList = ({ segmented }) => (
  <Container>
    <Segment className={segmented ? "" : "display-none"}>
      {" "}
      <Header as='h2'>Skills</Header>
      <Query query={GET_SKILLS}>
        {({ loading, error, data }) => {
          if (loading) return <Loader active inline='centered' />;
          if (error) return `Error: ${error.message}`;

          return (
            <div className='skill-list'>
              {data.skills.map(skill => (
                <Skill key={skill.id} data={skill} />
              ))}
            </div>
          );
        }}
      </Query>
    </Segment>
  </Container>
);

export default SkillList;
