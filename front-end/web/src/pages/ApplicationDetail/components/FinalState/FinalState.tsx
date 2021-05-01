import React from 'react'
import { useMutation } from '@apollo/client'
import { Button } from 'semantic-ui-react'
import { toast } from 'react-toastify';

import { ACCEPT, REJECT } from '../../../../common/apollo/mutations'
import { IProps } from './types';
import { btnStyle, btnContainer } from './styles'

const FinalState: React.FC<IProps> = ({
  id
}: IProps) => {
  const [Submitt] =  useMutation(ACCEPT);
  const [Reject] =  useMutation(REJECT);

  const onAccept = () => {
    Submitt({ variables: { id }}).then(()=>{
      toast.success("Application has been accepted successfully");
    }).catch((error)=>{
      toast.error(`Ups! There is an error: ${error}`);
    })
  }

  const onReject = () => {
    Reject({ variables: { id }}).then(()=>{
      toast.success("Application has been rejected successfully");
    }).catch((error)=>{
      toast.error(`Ups! There is an error: ${error}`);
    })
  }

  return (
    <div className={btnContainer}>
        <Button className={btnStyle} positive onClick={onAccept}>
          Accept
        </Button>
        <Button className={btnStyle} negative onClick={onReject}>
          Reject
        </Button>
    </div>
  )
}

export default FinalState