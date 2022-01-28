import React from 'react'
import * as S from './styles'

export const PokemonDetails = ({
  image,
  name,
  weight,
  height,
  maxHP,
  maxCP,
  attacks,
  evolutions,
  classification
}) => (
  <S.Wrapper>
    <S.Title>
      <h3>{name}</h3>
    </S.Title>
    <div>
      <S.Thumbnail>
        <S.CardImg>
          <img src={image} alt={name} />
        </S.CardImg>
        <S.Types>
          <strong>
            {weight?.maximum}' | '{height?.maximum}
          </strong>
        </S.Types>
      </S.Thumbnail>
      <S.Details>
        <>
          <S.Header>
            <p>
              <strong>HP:</strong> {maxHP}
            </p>
            <p>
              <strong>CP:</strong> {maxCP}
            </p>
          </S.Header>

          <S.Body>
            <p>
              <strong>classification: </strong>
              <br />
              {classification}
            </p>

            {evolutions && (
              <p>
                <strong>evolutions: </strong>
                <br />
                {evolutions?.map(({ name }) => name).join(' | ')}
              </p>
            )}
            <p>
              <strong>attacks: </strong>
              <br />
              {attacks?.special.map(({ name }) => name).join(' | ')}
            </p>
          </S.Body>
        </>
      </S.Details>
    </div>
  </S.Wrapper>
)
