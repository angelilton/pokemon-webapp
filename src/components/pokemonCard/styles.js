import styled from 'styled-components'

export const Thumbnail = styled.div`
  max-width: 280px;
  width: 100%;
  padding: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  /* cursor: pointer; */

  :hover {
    transform: translateY(-0.5rem);
    border: 1px solid rgba(0, 0, 0, 0.12);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.1);
  }
`

export const CardImg = styled.div`
  > img {
    height: 210px;
    border-radius: 0;
    object-fit: cover;
  }
`
export const Title = styled.h3`
  margin: 1.5rem 0 0.2rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffca39;
  opacity: 0.8;
  text-shadow: 0 2px 1px rgba(0, 0, 0, 0.4);
`

export const Types = styled.p`
  color: rgba(0, 0, 0, 0.5);
`
