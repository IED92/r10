import {gql} from 'apollo-boost';

export const ALL_SESSIONS = gql`
  {
    allSessions {
      id
      description
      location
      speaker {
        id
        image
        name
      }
      startTime
      title
    }
  }
`;

export const ALL_CONDUCTS = gql`
  {
    allConducts {
      id
      description
      title
      order
    }
  }
`;
