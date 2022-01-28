import React, { useState } from 'react'
import { CatchButton } from '../catchButton'

import * as S from './styles'

export function PokemonCard({ pokemon }) {
  return (
    <S.Thumbnail>
      <S.CardImg>
        <img src={pokemon.image} alt={pokemon.name} />
      </S.CardImg>
      <S.Title>{pokemon.name}</S.Title>
      <S.Types>{pokemon.types.join(' | ')}</S.Types>
      <strong>
        {pokemon.weight.maximum}' | '{pokemon.height.maximum}{' '}
      </strong>
      <CatchButton id={pokemon.id} />
    </S.Thumbnail>
  )
}
