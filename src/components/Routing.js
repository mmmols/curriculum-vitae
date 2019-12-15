import React from "react";

import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import NoMatch from "./NoMatch";
import CompanyList from "./Company/CompanyList";
import EducationList from "./Education/EducationList";
import ProjectList from "./Project/ProjectList";
import SkillList from "./Skill/SkillList";

const Routing = () => (
  <Switch>
    <Route exact path='/'>
      <Home />
    </Route>
    <Route exact path='/educations'>
      <EducationList />
    </Route>
    <Route exact path='/companies'>
      <CompanyList />
    </Route>
    <Route exact path='/projects'>
      <ProjectList />
    </Route>
    <Route exact path='/skills'>
      <SkillList />
    </Route>
    <Route path='*'>
      <NoMatch />
    </Route>
  </Switch>
);

export default Routing;
