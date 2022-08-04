/* eslint-disable import/no-unresolved */
import * as S from './styles'
// import { AboutApp } from '../../components/apps/AboutApp'
import { Section as AboutSection } from 'about/Section'
import { Section as StudySection } from 'study/Section'
import { Section as ProjectsSection } from 'projects/Section'
import { BlogApp } from '../../components/apps/BlogApp'
import { Contact } from '../../components/Contact'

export const Home = () => {
  return (
    <>
      <S.HomeContainer>
        <h1>
          Hi, I’m Felipe
          <br />
          welcome to my Portfolio
        </h1>
      </S.HomeContainer>
      <AboutSection />
      <StudySection />
      <ProjectsSection />
      <BlogApp />
      <Contact />
    </>
  )
}
