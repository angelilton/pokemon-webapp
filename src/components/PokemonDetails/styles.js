import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: space-around;

  > div {
    display: flex;

    ${media.lessThan('medium')`
    flex-direction: column;
  `}
  }
`
export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;

  h3 {
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    color: #ffca39;
    opacity: 0.8;
    text-shadow: 0 2px 1px rgba(0, 0, 0, 0.4);
  }
`

export const Thumbnail = styled.div`
  width: max-content;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-self: center;
`

export const CardImg = styled.div`
  > img {
    height: 210px;
    border-radius: 0;
    object-fit: cover;
  }
`

export const Types = styled.p`
  text-align: center;
  margin-top: 4px;
  color: rgba(0, 0, 0, 0.5);
`

export const Details = styled.div`
  margin-left: 5px;
  padding: 7px;

  p {
    padding: 5px;
  }

  ${media.lessThan('medium')`
    align-self: center;
    padding: 20px;
  `}
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  + p {
    margin-right: 100px;
  }

  p {
    background: #ffca39;
  }
`

export const Body = styled.div``
