import React from "react";

import { Container } from "semantic-ui-react";
import CompanyList from "./Company/CompanyList";
import EducationList from "./Education/EducationList";
import SkillList from "./Skill/SkillList";
import ProjectList from "./Project/ProjectList";

const Home = () => (
  <Container>
    <CompanyList segmented />
    <EducationList segmented />
    <SkillList segmented />
    <ProjectList segmented />
  </Container>
);

export default Home;
