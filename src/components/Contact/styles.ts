import styled from 'styled-components'
import contactBackground from '../../assets/contact-background.png'

export const ContactContainer = styled.div`
  background-image: url(${contactBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  /* height: 100vh; */
  /* min-height: 900px; */
  padding-bottom: 120px;
`

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  h1 {
    font-size: 2rem;
    color: #00fea1;
    font-weight: bold;
    margin-bottom: 3rem;
  }

  @media (min-width: ${({ theme }) => theme.sizes.tabletPortraitUp}) {
    h1 {
      font-size: 3rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.sizes.desktopUp}) {
    h1 {
      font-size: 4.5rem;
    }
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;

  div {
    display: flex;
    gap: 8px;
    width: 100%;
  }

  input,
  textarea {
    background: #242424;
    padding: 10px 20px;
    font-size: 1rem;
    width: 100%;
    color: white;
  }

  textarea {
    height: 150px;
    /* width: 560px; */
    max-width: 560px;
    resize: none;
    margin-bottom: 40px;
  }

  input::placeholder,
  textarea::placeholder {
    /* color: white; */
  }
`

export const Button = styled.button`
  background: transparent;
  cursor: pointer;
  color: #ba99f6;
  border: 2px solid #ba99f6;
  padding: 16px 32px;
`
