import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_POKEMONS } from '../../graphql/querys-pokemons'
import { PokemonCard } from '../PokemonCard'
import InfiniteScroll from '../../utils/infiniteScroll'

import * as S from './styles'

export function PokemonsContainer() {
  const {
    data: { pokemons = [] } = {},
    fetchMore,
    loading
  } = useQuery(GET_POKEMONS, {
    notifyOnNetworkStatusChange: true,
    variables: { first: 12 }
  })

  const handleShowMore = () => {
    fetchMore({
      variables: {
        first: pokemons.length + 12
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev
        const resp = {
          pokemons: [...fetchMoreResult.pokemons]
        }
        return resp
      }
    })
  }

  return (
    <>
      <S.Container>
        <S.Logo>
          <img src=" /image/pokemon-logo.png" alt="" />
        </S.Logo>

        <S.cardsBox>
          {loading ? (
            <h1>loading</h1>
          ) : (
            pokemons &&
            pokemons.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))
          )}
        </S.cardsBox>
      </S.Container>
      {!loading && <InfiniteScroll fetchMore={handleShowMore} />}
    </>
  )
}
