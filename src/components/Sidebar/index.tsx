import {
  BagSimple,
  Book,
  GlobeHemisphereWest,
  House,
  User,
} from 'phosphor-react'
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
          <S.IconWrapper active={pathname === '/about'}>
            <User size={24} weight='fill' />
          </S.IconWrapper>
          <S.IconWrapper active={pathname === '/study'}>
            <Book size={24} weight='fill' />
          </S.IconWrapper>
          <S.IconWrapper active={pathname === '/projects'}>
            <BagSimple size={24} weight='fill' />
          </S.IconWrapper>
          <S.IconWrapper
            className={pathname === '/blog' ? 'avoid-click' : ''}
            active={pathname === '/blog'}
          >
            <Link to='/blog'>
              <GlobeHemisphereWest size={24} weight='fill' />
            </Link>
          </S.IconWrapper>
        </S.Content>
        <S.MenuBorder pathname={pathname} />
      </S.Navigation>
    </S.Container>
  )
}
