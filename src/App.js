import React from 'react'
import ApolloClient, { InMemoryCache } from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { PokemonsContainer } from './components/containers'
import './App.css'

function App() {
  const client = new ApolloClient({
    uri: 'https://graphql-pokemon2.vercel.app',
    cache: new InMemoryCache()
  })

  return (
    <ApolloProvider client={client}>
      <PokemonsContainer />
    </ApolloProvider>
  )
}

export default App
