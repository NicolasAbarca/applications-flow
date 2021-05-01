/* eslint-disable react/prop-types */
import React,{ FC, useState } from 'react'
import { useQuery } from '@apollo/client'
import { Container } from 'semantic-ui-react'

import StatusStep from './components/StatusStep'
import AddReview from './components/AddReview'
import Detail from './components/Detail'
import ReviewList from './components/ReviewList'
import Submit from './components/Submit'
import CompleteReview from './components/CompleteReview'
import FinalState from './components/FinalState'

import { GET_APPLICATION_DETAIL } from '../../common/apollo/querys'
import { APOLLO_STATES } from '../../common/Constants/constants'
import { containerStyle } from './styles'

type Review = {
  id: string;
  title: string;
  body: string;
};

type ApplicationDetailType = {
  application: {
    id: string
    title: string
    excerpt: string
    state: 'draft' | 'published' | 'inReview' | 'reviewed' | 'accepted' | 'rejected';
    reviews: Review[]
  }
}
interface Props {
  match: {
    params: {
      id: string
      action?: string
    }
  }
}

const ApplicationDetail: FC<Props> = ({ match }) => {
  const [state, setState] = useState<string>()
  const { loading, data, error } = useQuery<ApplicationDetailType>(GET_APPLICATION_DETAIL, {
    variables: { id: match.params.id },
  })
  
  if(data && !state){
    setState(data.application.state)
  }

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  if (!data) return <div>No data?</div>

  return (
    <Container className={containerStyle}>
      <StatusStep currentState={data.application.state}/>
      <Detail title={data.application.title} excerpt={data.application.excerpt}/>
      <ReviewList reviews={data.application.reviews}/>
      {data.application.state === APOLLO_STATES.DRAFT &&
        <Submit id={data.application.id} />
      }
      {data.application.state === APOLLO_STATES.PUBLISHED || data.application.state === APOLLO_STATES.IN_REVIEW ?
       <AddReview application={data.application}/> : null
      }
      {data.application.state === APOLLO_STATES.IN_REVIEW &&
       <CompleteReview id={data.application.id}/>
      }
      {data.application.state === APOLLO_STATES.REVIEWED &&
       <FinalState id={data.application.id}/>
      }
    </Container>
  )
}

export default ApplicationDetail
