import React, { FC } from 'react'
import { gql, useQuery } from '@apollo/client'
import { Container } from 'semantic-ui-react'

import List from './components/List'
import { GET_APPLICATIONS } from '../../common/apollo/querys'

type ApplicationType = {
  id: string
  title: string
  excerpt: string
  state: 'draft' | 'published' | 'inReview' | 'reviewed' | 'accepted' | 'rejected'
}

type ApplicationListType = {
  applications: ApplicationType[]
}

const ApplicationList: FC = () => {
  const { loading, data, error } = useQuery<ApplicationListType>(GET_APPLICATIONS)
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  if (!data) return <div> Where is the data?</div>

  return (
    <Container style={{ marginTop: '7em' }}>
      <List options={data.applications}/>
    </Container>
  )
}

export default ApplicationList
