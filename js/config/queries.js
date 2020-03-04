import {gql} from 'apollo-boost';

const ALL_SESSIONS = gql`
  {
    allSessions {
      id
      description
      location
      startTime
      title
      speaker {
        id
        bio
        image
        name
      }
    }
  }
`;

export default ALL_SESSIONS;
