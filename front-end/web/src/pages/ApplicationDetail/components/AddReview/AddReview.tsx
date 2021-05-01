import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { Button, Form, Header } from 'semantic-ui-react'
import { toast } from 'react-toastify';
import { IProps, TitleError, Review } from './types';
import { formStyle } from './styles'

import { SAVE  } from '../../../../common/apollo/mutations'
type ReviewDetailType = {
  createReview: {
    state: string,
    reviews : Review[]
  }
}

const AddReview: React.FC<IProps> = ({
  application,
}: IProps) => {

  const [title, setTitle] = useState<string>('')
  const [body, setBody] = useState<string>('')
  const [titleRequired, setTitleRequired] =  useState<TitleError | boolean>(false)
  const [reviews, setReviews] = useState<Review[]>(application.reviews)

  const [saveApp, { data, error }] = useMutation<ReviewDetailType>(SAVE);

  if(error){
    console.log(error)
  }

  if(data){
    if(reviews === []){
      setReviews(data.createReview.reviews)
    }
  }

  const onSubmitReview = () => {
    if (title === '') {
      setTitleRequired({
        content: 'Title is required',
        pointing: 'below',
      })
    } else {
      saveApp({ variables: { input: { applicationId: application.id, title, body } }}).then(()=>{
        setBody('')
        setTitle('')
      }).then(()=> {
        toast.success('Review added successfully');
      }).catch((error)=>{
        toast.error(`Ups! There is an error: ${error}`);
      });
    }
  }
  return (
    <Form className={formStyle} reply>
      <Header as='h4'>Add Review</Header>
      <Form.Input 
        value={title} 
        onChange={(item)=>{ 
          setTitle(item.target.value)
          setTitleRequired(false)
        }} 
        placeholder='Title' 
        error={titleRequired}
      />
      <Form.TextArea 
        value={body}  
        onChange={(item)=>{
          setBody(item.target.value)
        }}  
        placeholder='Description...' />
        <div>
          <Button secondary content='Add Review' onClick={onSubmitReview} labelPosition='left' icon='edit' primary />
        </div>
    </Form>
  )
}

export default AddReview