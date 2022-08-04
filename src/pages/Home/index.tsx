/* eslint-disable import/no-unresolved */
import * as S from './styles'
import { AboutApp } from '../../components/apps/AboutApp'
import { StudyApp } from '../../components/apps/StudyApp'
import { ProjectsApp } from '../../components/apps/ProjectsApp'
import { BlogApp } from '../../components/apps/BlogApp'
import { Contact } from '../../components/Contact'

export const Home = () => {
  return (
    <S.ContentWrapper>
      <S.HomeContainer>
        <h1>
          Hi, I’m Felipe
          <br />
          welcome to my Portfolio
        </h1>
      </S.HomeContainer>
      <AboutApp />
      <StudyApp />
      <ProjectsApp />
      <BlogApp />
      <Contact />
    </S.ContentWrapper>
  )
}
