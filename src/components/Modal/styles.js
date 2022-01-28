import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 998;
`

export const Content = styled.div`
  position: fixed;
  top: 25%;
  bottom: 25%;
  left: 25%;
  right: 25%;

  ${media.lessThan('medium')`
   top: 5%;
  bottom: 5%;
  left: 5%;
  right: 5%;
  `}

  max-width: 771px;
  max-height: 400px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  margin-top: 2.4rem;
  z-index: 999;

  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`

export const CloseBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  top: -15px;
  right: -15px;
  width: 44px;
  height: 44px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  transform: matrix(-1, 0, 0, 1, 0, 0);
  border-radius: 50%;
  z-index: 41;

  svg {
    width: 18px;
    height: 18px;
  }

  ${media.lessThan('medium')`
   width: 38px;
   height: 38px;
   top: -10px;
   right: -7px;

    svg {
    width: 14px;
    height: 14px;
  }
  `}
`

const WrapperModifier = {
  open: () => css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  `,
  close: () => css`
    opacity: 0;
    pointer-events: none;
    transform: translateY(-2rem);
  `
}

export const Wrapper = styled.div`
  ${({ isOpen }) => css`
    position: absolute;
    width: max-content;

    ${CloseBtn},
    ${Content},
    ${Overlay} {
      transition: transform 0.2s ease-in, opacity 0.3s ease-in-out;

      ${isOpen && WrapperModifier.open()}
      ${!isOpen && WrapperModifier.close()}
    }
  `}
`

export const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: start !important;
  align-items: start !important;
  gap: 9px !important;
  text-align: left;
  padding-top: 29px;
  padding-left: 40px;
  padding-right: 26px;
  padding-bottom: 32px;

  h2 {
    font-size: 22px;
    font-weight: 400;
  }
`

export const Body = styled.div`
  font-size: 13px;
  line-height: 18px;
  color: #000000;
  text-align: justify;
  padding-top: 5px;
  padding-right: 22px;

  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 7px;
    height: 302px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 8px;
    background: #dbdbdb;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background: #b0b0b0;
  }

  align-items: start !important;
  gap: 0 !important;
`
