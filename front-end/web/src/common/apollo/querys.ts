import { gql } from '@apollo/client'

export const GET_APPLICATION_DETAIL = gql`
query ApplicationDetail($id: ID!) {
  application(id: $id) {
    id
    title
    excerpt
    state
    reviews {
      id
      title
      body
    }
  }
}
`

export const GET_APPLICATIONS = gql`
  query {
    applications {
      id
      title
      excerpt
      state
    }
  }
`