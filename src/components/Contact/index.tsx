import { Container } from '../Container'
import * as S from './styles'

export const Contact = () => {
  return (
    <S.ContactContainer>
      <Container>
        <S.FormWrapper>
          <h1>Contact me</h1>
          <S.Form>
            <div>
              <input type='text' placeholder='Name' />
              <input type='text' placeholder='Email' />
            </div>
            <input type='text' placeholder='Subject' />
            <textarea placeholder='Message' maxLength={250} />
          </S.Form>
          <S.Button>Send Message</S.Button>
        </S.FormWrapper>
      </Container>
    </S.ContactContainer>
  )
}
