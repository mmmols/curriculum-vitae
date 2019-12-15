import gql from "graphql-tag";

export const GET_COMPANIES = gql`
  {
    companies {
      id
      title
      position
      started_at
      ended_at
      logo
    }
  }
`;
