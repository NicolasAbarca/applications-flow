import { gql } from '@apollo/client'

export const SUBMIT = gql`
  mutation SubmitApplication($id: String!) {
    submitApplication(id: $id) {
      id
      state
    }
  }
`
export const COMPLETE_REVIEW = gql`
  mutation CompleteReviewOfApplication($id: String!) {
    completeReviewOfApplication(id: $id) {
      id
      state
    }
  }
`

export const ACCEPT= gql`
  mutation AcceptApplication($id: String!) {
    acceptApplication(id: $id) {
      id
      state
    }
  }
`

export const REJECT = gql`
  mutation RejectApplication($id: String!) {
    rejectApplication(id: $id) {
      id
      state
    }
  }
`

export const SAVE = gql`
  mutation CreateReview($input: CreateReviewInput!) {
    createReview(input: $input) {
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