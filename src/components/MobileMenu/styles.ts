import styled from 'styled-components'

export const MobileMenuContainer = styled.div`
  position: fixed;
  width: 72px;
  height: 72px;
  background-color: #00fea1;
  right: 16px;
  bottom: 16px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  cursor: pointer;
`

interface MenuProps {
  isOpen: boolean
}

export const Menu = styled.div<MenuProps>`
  position: absolute;
  height: ${({ isOpen }) => (isOpen ? '264px' : '0px')};
  width: 60px;
  background: #00fea1;
  transform: translateY(-40%);
  border-radius: 10000px;
  z-index: 2;
  padding: 48px 8px 80px;
  padding: ${({ isOpen }) => (isOpen ? '48px 8px 80px' : 0)};
  transition: height 0.5s ease-in-out, padding 0.5s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 32px;
  /* align-items: center; */
`

export const ActiveMenu = styled.div`
  width: 65%;
  height: 65%;
  border-radius: 50%;
  background: #121212;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;
`
