import React from 'react'
import { Step } from 'semantic-ui-react'

import { IProps } from './types';
import { STATES, STATES_DISPLAY_NAME } from '../../../../common/Constants/constants'
import { hideMobile, showMobile } from './styles'

const StatusStep: React.FC<IProps> = ({
  currentState,
}: IProps) => {
  const orderState = STATES.indexOf(currentState);
  const availablesStates = STATES.slice(0, orderState + 1)
  return (
    <Step.Group ordered>
      {availablesStates.map((state, index) => {
        if (currentState ==='rejected' && state === 'accepted') return null
          return (
            <Step
              key={index}
              completed={orderState === index}
              className={`${orderState === index ? showMobile : hideMobile}`}
              active={orderState >= index}>
              <Step.Content >
                <Step.Title>{(STATES_DISPLAY_NAME as any)[state]}</Step.Title>
              </Step.Content>
            </Step>
          )
      })}
  </Step.Group>
  )
}

export default StatusStep