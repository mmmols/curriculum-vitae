import gql from "graphql-tag";

export const GET_SKILLS = gql`
  {
    skills {
      id
      title
      category
    }
  }
`;
