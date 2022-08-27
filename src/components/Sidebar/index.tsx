import { BagSimple, Book, House, User } from 'phosphor-react'
import { Link, useLocation } from 'react-router-dom'

import * as S from './styles'

export const Sidebar = () => {
  const { pathname } = useLocation()

  return (
    <S.Container>
      <S.Navigation>
        <S.Content>
          <S.IconWrapper
            className={pathname === '/' ? 'avoid-click' : ''}
            active={pathname === '/'}
          >
            <Link to='/'>
              <House size={24} weight='fill' />
            </Link>
          </S.IconWrapper>
          <S.IconWrapper
            className={pathname === '/about' ? 'avoid-click' : ''}
            active={pathname === '/about'}
          >
            <Link to='/about'>
              <User size={24} weight='fill' />
            </Link>
          </S.IconWrapper>
          <S.IconWrapper
            className={pathname === '/study' ? 'avoid-click' : ''}
            active={pathname === '/study'}
          >
            <Link to='/study'>
              <Book size={24} weight='fill' />
            </Link>
          </S.IconWrapper>
          <S.IconWrapper
            className={pathname === '/projects' ? 'avoid-click' : ''}
            active={pathname === '/projects'}
          >
            <Link to='/projects'>
              <BagSimple size={24} weight='fill' />
            </Link>
          </S.IconWrapper>
        </S.Content>
        <S.MenuBorder pathname={pathname} />
      </S.Navigation>
    </S.Container>
  )
}
