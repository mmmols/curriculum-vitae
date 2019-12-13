import gql from "graphql-tag";

export const GET_COMPANIES = gql`
  {
    companies {
      id
      title
      started_at
      ended_at
    }
  }
`;
