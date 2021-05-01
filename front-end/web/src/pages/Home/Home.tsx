/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import {
  Container,
  Header,
  List,
  Segment,
} from 'semantic-ui-react'

const FixedMenuLayout = () => (
  <div>
    <Container text style={{ marginTop: '7em' }}>
      <Header as='h1'>Welcome to the Audition</Header>
      <p>Here at Spacely's Sprockets, we are processing applications for new employees. In order to process them efficiently we need your help.</p>
      <p>You will find a server in this repo that you can start using npm run server. But before you do that, you should seed some initial application data using npm run server:seed. That'll make sure you have 20 applications to start playing around with;</p>
      <Header as='h1'>The Setup</Header>
      <p>You have an API that gives back a list of applications in various states.</p>
      <p>Our application state flow is: draft -{'>'} published -{'>'} reviewed -{'>'} accepted | rejected</p>
      <p>Note: An editor can only leave reviews if the appliction is in "published" state.</p>
      <p>There are several mutations for advancing an application between states as well as for leaving reviews (an application can have many reviews).</p>
      <Header as='h1'>The Challenge</Header>
      <p>We need you to build a ReactJS app that does 2 things:</p>
      <List as='ol'>
        <List.Item as='li'>Has an Application view and show it's state and any reviews that were left for that application</List.Item>
        <List.Item as='li'>Has an Editor view that allows you to leave reviews for an Application (if the Application is in the right state) and advance the Application to Accepted or Rejected</List.Item>
      </List>
    </Container>

    <Segment inverted vertical style={{ margin: '10em 0em 0em', padding: '5em 0em' }}>
      <Container textAlign='center'>
        <List horizontal inverted divided link size='small'>
          <List.Item as='a' href='#'>
            Nicolas Abarca
          </List.Item>
        </List>
      </Container>
    </Segment>
  </div>
)

export default FixedMenuLayout