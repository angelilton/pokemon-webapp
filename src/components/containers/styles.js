import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  display: flex;
  max-width: 1200px;
  margin: auto;
  flex-wrap: wrap;
`

export const Logo = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;

  img {
    width: 400px;
    max-width: 90%;
  }
`

export const cardsBox = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  display: grid;
  justify-items: center;
  gap: 14px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  ${media.greaterThan('large')`
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  `}
`
