const { gql } = require("apollo-server");

const educations = require('./educations');
const companies = require('./companies');

const resolvers = {
    Query: {
        companies: () => companies,
        educations: () => educations
    },
};

const typeDefs = gql`
  type Companies {
    id: ID
    title: String
    started_at: String
    ended_at: String
    position: String
  }

  type Educations {
    id: ID
    school: String
    education: String
    started_at: String
    ended_at: String
  }

  type Skills {
    id: ID
    title: String
  }

  type Projects {
    id: ID
    title: String
    url: String
  }

  type Query {
    companies: [Companies]
    educations: [Educations]
    skills: [Skills]
    projects: [Projects]
  }
`;

module.exports = {
    resolvers,
    typeDefs,
};