import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1140px;
  padding-right: 16px;
  padding-left: 16px;
  margin-left: auto;
  margin-right: auto;
  height: 100%;

  @media (min-width: ${({ theme }) => theme.sizes.tabletPortraitUp}) {
    max-width: 720px;
  }

  @media (min-width: ${({ theme }) => theme.sizes.tabletLandscapeUp}) {
    max-width: 960px;
  }

  @media (min-width: ${({ theme }) => theme.sizes.desktopUp}) {
    max-width: 1140px;
  }

  @media (min-width: ${({ theme }) => theme.sizes.bigDesktopUp}) {
    max-width: 1280px;
  }
`
