import React, { useState } from 'react'
import { useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_POKEMON_DETAILS } from '../../graphql/querys-pokemons'
import { PokemonDetails } from '../PokemonDetails'

import * as S from './styles'

const Modal = ({ isClick, id }) => {
  const [isOpen, setIsOpen] = useState(false)

  const { data: { pokemon = [] } = {} } = useQuery(GET_POKEMON_DETAILS, {
    notifyOnNetworkStatusChange: true,
    variables: { id: id }
  })

  useEffect(() => {
    setIsOpen(isClick)
  }, [isClick])

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Content aria-hidden={!isOpen}>
        <>
          <S.CloseBtn aria-hidden={!isOpen} onClick={() => setIsOpen(!isOpen)}>
            <img src="./image/menu-close.svg" alt="" aria-hidden={!isOpen} />
          </S.CloseBtn>
          <S.ContentWrapper>
            <PokemonDetails {...pokemon} />
          </S.ContentWrapper>
        </>
      </S.Content>
      <S.Overlay aria-hidden={!isOpen} onClick={() => setIsOpen(!isOpen)} />
    </S.Wrapper>
  )
}

export default Modal
