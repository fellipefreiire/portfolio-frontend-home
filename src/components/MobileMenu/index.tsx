import { BagSimple, Book, House, User } from 'phosphor-react'
import { useState } from 'react'
import * as S from './styles'

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.MobileMenuContainer onClick={() => setIsOpen((prev) => !prev)}>
      <S.ActiveMenu>
        <House size={24} weight='fill' />
      </S.ActiveMenu>
      <S.Menu isOpen={isOpen}>
        <User size={24} weight='fill' color='#121212' />
        <Book size={24} weight='fill' color='#121212' />
        <BagSimple size={24} weight='fill' color='#121212' />
      </S.Menu>
    </S.MobileMenuContainer>
  )
}
