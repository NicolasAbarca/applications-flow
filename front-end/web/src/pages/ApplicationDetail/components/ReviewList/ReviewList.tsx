import React from 'react'
import { Message, Table} from 'semantic-ui-react'
import { nanoid } from 'nanoid'

import { IProps } from './types';

const ReviewList: React.FC<IProps> = ({
  reviews,
}: IProps) => {
  if(!reviews.length) return <Message color='orange' compact>No reviews found :(</Message>
  return (
  <Table celled padded>
    <Table.Header>
    <Table.Row>
        <Table.HeaderCell textAlign='center' colSpan='3'>REVIEWS</Table.HeaderCell>
      </Table.Row>
      <Table.Row>
        <Table.HeaderCell>Title</Table.HeaderCell>
        <Table.HeaderCell>Comments</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
    {reviews.map((item) => (
      <Table.Row key={nanoid()}>
        <Table.Cell>
          {item.title}
        </Table.Cell>
        <Table.Cell>
          {item.body}
        </Table.Cell>
      </Table.Row>
      ))}
    </Table.Body>
  </Table>
  )
}

export default ReviewList