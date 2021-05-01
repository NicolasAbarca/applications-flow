import React from 'react'
import { useMutation } from '@apollo/client'
import { Button } from 'semantic-ui-react'
import { toast } from 'react-toastify';
import { SUBMIT } from '../../../../common/apollo/mutations'
import { IProps } from './types';
import { btnstyle } from './styles'

const Submit: React.FC<IProps> = ({
  id
}: IProps) => {
  const [submitApp, { loading }] =  useMutation(SUBMIT);
  const onsubmit = () => {
    submitApp({ variables: { id }}).then(()=>{
      toast.success("Application has been published successfully");
    }).catch((error)=>{
      toast.error(`Ups! There is an error: ${error}`);
    })
  }

  return (
    <div className={btnstyle}>
      <Button loading={loading} onClick={onsubmit} primary>Submit Application</Button> 
    </div>
  )
}

export default Submit