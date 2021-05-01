import React from 'react'
import { useMutation } from '@apollo/client'
import { Button, Divider } from 'semantic-ui-react'
import { toast } from 'react-toastify';

import { COMPLETE_REVIEW } from '../../../../common/apollo/mutations'
import { IProps } from './types';
import { btnstyle } from './styles'

const CompleteReview: React.FC<IProps> = ({
  id
}: IProps) => {
  const [submitApp, { loading }] =  useMutation(COMPLETE_REVIEW);

  const onComplete = () => {
    submitApp({ variables: { id }}).then(()=>{
      toast.success("Application has been reviewed successfully");
    }).catch((error)=>{
      toast.error(`Ups! There is an error: ${error}`);
    })
  }

  return (
    <>
      <Divider horizontal>Or</Divider>
      <div className={btnstyle}>
        <Button  loading={loading} onClick={onComplete} primary>Complete Review</Button>
      </div>
    </>
    
  )
}

export default CompleteReview