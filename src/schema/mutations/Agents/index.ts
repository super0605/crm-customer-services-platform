import { gql } from 'apollo-boost';
export const DELETE_AGENTS = gql`
mutation DeleteAgent ($ids: [ID!]!) {
  agents_massActions(ids: $ids, actions:{
    setDeleted: true
  }) {
    id,
    name
  }
}
`;

export const UPDATE_AGENTS = gql`
  mutation UpdateAgent ($payload: Object!) {
    update_agent(payload: $payload)
  }
`;

export const ADD_TEAM = gql`
  mutation AddTeam ($payload: Object!) {
    update_agent(payload: $payload)
  }
`;

export const REMOVE_TEAM = gql`
  mutation RemoveTeam ($payload: Object!) {
    update_agent(payload: $payload)
  }
`;

export const REMOVE_ALL_TEAMS = gql`
  mutation RemoveAllTeams ($payload: Object!) {
    update_agent(payload: $payload)
  }
`;