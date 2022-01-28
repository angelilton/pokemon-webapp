import React from 'react'
import { useCatch } from '../../hooks/use-catch'

import * as S from './styles'

export function CatchButton({ id }) {
  const { isInList, addToList, removeFromList } = useCatch()

  return (
    <S.Toggle>
      <input
        id={`switch-flat-${id}`}
        className="switch switch--flat"
        type="checkbox"
        defaultChecked={isInList(id)}
        onClick={() => (isInList(id) ? removeFromList(id) : addToList(id))}
      />
      <label htmlFor={`switch-flat-${id}`}></label>
    </S.Toggle>
  )
}
