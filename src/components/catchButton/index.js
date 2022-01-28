import React, { useState } from 'react'
import { useCatch } from '../../hooks/use-catch'

import * as S from './styles'

export function CatchButton({ id }) {
  const { isInList, addToList, removeFromList } = useCatch()

  return (
    <S.Toggle>
      <input
        id={`switch-flat-${id}`}
        class="switch switch--flat"
        type="checkbox"
        checked={isInList(id)}
        onClick={() => (isInList(id) ? removeFromList(id) : addToList(id))}
      />
      <label for={`switch-flat-${id}`}></label>
    </S.Toggle>
  )
}
