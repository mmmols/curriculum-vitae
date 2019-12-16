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
    <Route exact path='/' component={Home} />>
    <Route path='/educations' component={EducationList} />
    <Route path='/companies' component={CompanyList} />
    <Route path='/projects' component={ProjectList} />
    <Route path='/skills' component={SkillList} />
    <Route path='*' component={NoMatch} />
  </Switch>
);

export default Routing;
