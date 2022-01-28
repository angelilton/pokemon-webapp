import React, { useState } from 'react'

import * as S from './styles'

export function PokemonCard({ pokemon }) {
  const [catchList, setCatchList] = useState([])
  console.log(catchList)

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
      <S.Toggle>
        <input
          id={`switch-flat-${pokemon.id}`}
          class="switch switch--flat"
          type="checkbox"
          onClick={() => setCatchList([...catchList, pokemon.id])}
        />
        <label for={`switch-flat-${pokemon.id}`}></label>
      </S.Toggle>
    </S.Thumbnail>
  )
}
