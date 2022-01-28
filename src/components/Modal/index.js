import React, { useState } from 'react'
import { useEffect } from 'react'

import * as S from './styles'

const Modal = ({ isClick }) => {
  const [isOpen, setIsOpen] = useState(false)
  console.log('modal', isOpen)

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
            <h1>pokemon details</h1>
          </S.ContentWrapper>
        </>
      </S.Content>
      <S.Overlay aria-hidden={!isOpen} onClick={() => setIsOpen(!isOpen)} />
    </S.Wrapper>
  )
}

export default Modal
