import {
  BagSimple,
  Book,
  GlobeHemisphereWest,
  House,
  User,
} from 'phosphor-react'
import { useState } from 'react'
import * as S from './styles'

export const Sidebar = () => {
  const [active, setActive] = useState('home')
  const [activePosition, setActivePosition] = useState(37)

  const navigation = (nav: string) => {
    setActive(nav)
    switch (nav) {
      case 'home':
        setActivePosition(37)
        break
      case 'about':
        setActivePosition(117)
        break
      case 'study':
        setActivePosition(197)
        break
      case 'projects':
        setActivePosition(277)
        break
      case 'blog':
        setActivePosition(357)
        break
      default:
        setActivePosition(37)
        break
    }
  }

  return (
    <S.Container>
      <S.Navigation>
        <S.Content>
          <S.IconWrapper active={active === 'home'}>
            <button onClick={() => navigation('home')}>
              <House size={24} weight='fill' />
            </button>
          </S.IconWrapper>
          <S.IconWrapper active={active === 'about'}>
            <button onClick={() => navigation('about')}>
              <User size={24} weight='fill' />
            </button>
          </S.IconWrapper>
          <S.IconWrapper active={active === 'study'}>
            <button onClick={() => navigation('study')}>
              <Book size={24} weight='fill' />
            </button>
          </S.IconWrapper>
          <S.IconWrapper active={active === 'projects'}>
            <button onClick={() => navigation('projects')}>
              <BagSimple size={24} weight='fill' />
            </button>
          </S.IconWrapper>
          <S.IconWrapper active={active === 'blog'}>
            <button onClick={() => navigation('blog')}>
              <GlobeHemisphereWest size={24} weight='fill' />
            </button>
          </S.IconWrapper>
        </S.Content>
        <S.MenuBorder position={activePosition} />
      </S.Navigation>
    </S.Container>
  )
}
