import styled from 'styled-components'
import background from '../../assets/home-background.png'

export const HomeContainer = styled.section`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom;
  /* margin-left: 96px; */
  height: 100vh;
  /* padding: 110px; */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 6.25rem;
    font-weight: bold;
    color: white;
  }
`
