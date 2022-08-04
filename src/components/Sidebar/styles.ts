import styled, { css } from 'styled-components'

export const Container = styled.aside`
  background-color: transparent;
  height: 100vh;
  position: fixed;
  padding: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Navigation = styled.menu`
  position: relative;
`

export const Content = styled.ul`
  background-color: #00fea1;
  padding: 48px 8px;
  gap: 32px;
  display: flex;
  flex-direction: column;
  border-radius: 10000px;
`

interface IIconWrapperProps {
  active?: boolean
}

export const IconWrapper = styled.li<IIconWrapperProps>`
  all: unset;
  position: relative;
  background: transparent;
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #121212;
  z-index: 11;
  transition: transform 1s;

  a:focus {
    box-shadow: 0 0 0 0;
  }

  &::before {
    content: '';
    z-index: -1;
    width: 3em;
    height: 3em;
    border-radius: 50%;
    position: absolute;
    transform: scale(0);
    transition: background-color 1s, transform 1s;
  }

  ${({ active }) =>
    active &&
    css`
      color: white;
      border-radius: 50%;
      transform: translate3d(0.8rem, 0, 0);
      &::before {
        transform: scale(1);
        background: #121212;
      }
    `}

  &.avoid-click {
    pointer-events: none;
    cursor: pointer;
  }
`

interface IMenuBorder {
  pathname: string
}

const ACTIVE_POSITION = {
  '/': 37,
  '/about': 117,
  '/study': 197,
  '/projects': 277,
  '/blog': 357,
}

export const MenuBorder = styled.div<IMenuBorder>`
  top: ${({ pathname }) =>
    ACTIVE_POSITION[pathname as keyof typeof ACTIVE_POSITION]}px;
  left: 99%;
  height: 68px;
  width: 2.4em;
  position: absolute;
  clip-path: circle(33px at -15px 35px);
  background-color: #00fea1;
  transition: top 1s;
`
