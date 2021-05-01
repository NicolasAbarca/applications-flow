
import React from 'react';
import { IProps } from './types';
import { Table, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { nanoid } from 'nanoid'

import CheckMarkCell from './CheckMarkCell'
const List: React.FC<IProps> = ({
  options,
}: IProps) => {
  const states = ['draft', 'published', 'inReview', 'reviewed', 'accepted', 'rejected']
  const getAction = (state: string) => 
    state === 'inReview' ? '/review' : ''
  
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell >Title</Table.HeaderCell>
          <Table.HeaderCell>Excerpt</Table.HeaderCell>
          {states.map((state) => (
            <Table.HeaderCell key={nanoid()}>{state}</Table.HeaderCell>
          ))}
          <Table.HeaderCell>Action</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
      {options.map((option) => (
        <Table.Row key={nanoid()}
          positive={option.state === 'accepted'}
          negative={option.state === 'rejected'}>
          <Table.Cell>{option.title}</Table.Cell>
          <Table.Cell>{option.excerpt}</Table.Cell>
          {states.map((state) => (
            <CheckMarkCell key={nanoid()} positive={option.state === state} />
          ))}
          <Table.Cell textAlign='center'>
            <Link to={`/applications/${option.id}${getAction(option.state)}`}>
            {option.state === 'rejected' || option.state === 'accepted'  ? (
              <Icon link name='eye' />)
              :(
              <Icon link name='write' />
              )}
            </Link>
          </Table.Cell>
        </Table.Row>
      ))}
      </Table.Body>
    </Table>
  )
};

export default List;