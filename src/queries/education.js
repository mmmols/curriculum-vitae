import gql from "graphql-tag";

export const GET_EDUCATIONS = gql`
  {
    educations {
      id
      education
      school
      started_at
      ended_at
    }
  }
`;
