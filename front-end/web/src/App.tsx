import React, { FC } from 'react'
import { ApolloProvider } from '@apollo/client'
import { ToastContainer } from 'react-toastify';

import client from './apollo/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { SwitchView, Menu } from './components/Menu'

const App: FC = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
          <Menu/>
          <SwitchView />
      </Router>
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
      />
    </ApolloProvider>
  )
}

export default App
