import React from 'react'
import ApolloClient, { InMemoryCache } from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { PokemonsContainer } from './components/containers'
import './App.css'
import { CatchProvider } from './hooks/use-catch'

function App() {
  const client = new ApolloClient({
    uri: 'https://graphql-pokemon2.vercel.app',
    cache: new InMemoryCache()
  })

  return (
    <ApolloProvider client={client}>
      <CatchProvider>
        <PokemonsContainer />
      </CatchProvider>
    </ApolloProvider>
  )
}

export default App
