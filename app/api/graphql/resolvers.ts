import { Query } from 'urql'

export const resolvers = {
  Query: {
    me: () => 'me',
  },
}
