import styled from 'styled-components'
import background from '../../assets/home-background.png'

export const ContentWrapper = styled.main`
  background-color: #121212;
`

export const Img = styled.div`
  background: gray;
  width: 192px;
  height: 192px;
  border-radius: 50%;
`

export const HomeContainer = styled.section`
  background: url(${background});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom;
  height: 75vh;

  @media (min-width: ${({ theme }) => theme.sizes.tabletLandscapeUp}) {
    height: 100vh;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  text-align: center;
  height: 100%;

  h1 {
    font-size: 3.25rem;
    font-weight: bold;
    color: white;
  }

  @media (min-width: ${({ theme }) => theme.sizes.tabletPortraitUp}) {
    h1 {
      font-size: 3.5rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.sizes.tabletLandscapeUp}) {
    h1 {
      font-size: 4.5rem;
    }
    padding-bottom: 160px;
  }

  @media (min-width: ${({ theme }) => theme.sizes.desktopUp}) {
    h1 {
      font-size: 5rem;
    }
    padding-bottom: 180px;
  }

  @media (min-width: ${({ theme }) => theme.sizes.bigDesktopUp}) {
    h1 {
      font-size: 6.125rem;
    }
    padding-bottom: 200px;
  }
`
