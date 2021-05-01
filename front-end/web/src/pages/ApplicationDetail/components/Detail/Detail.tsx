import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import { IProps } from './types';
import { wrapper } from './styles'

const Detail: React.FC<IProps> = ({
  title, excerpt,
}: IProps) => (
  <Container className={wrapper} fluid>
    <Header as='h2'>{title}</Header>
    <p>{excerpt}</p>
  </Container>
)

export default Detail