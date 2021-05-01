
import React from 'react';
import { ICheckProps } from './types';
import { Table, Icon } from 'semantic-ui-react'

const CheckMarkCell: React.FC<ICheckProps> = ({
    positive,
  }: ICheckProps) => {
  
  return (
    <Table.Cell textAlign='center'>
      {positive && <Icon color='green' name='checkmark' size='large' />}
    </Table.Cell> 
  )
};

export default CheckMarkCell;