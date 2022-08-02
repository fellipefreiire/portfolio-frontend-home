import * as S from './styles'
// import { AboutApp } from '../../components/apps/AboutApp'
import { Sidebar } from '../../components/Sidebar'
import { Section as AboutSection } from 'about/Section'
import { Section as StudySection } from 'study/Section'
import { Section as ProjectsSection } from 'projects/Section'
import { Section as BlogSection } from 'blog/Section'
import { Contact } from '../../components/Contact'

export const Home = () => {
  return (
    <>
      <Sidebar />
      <S.HomeContainer>
        <h1>
          Hi, I’m Felipe :)
          <br />
          welcome to my Portfolio
        </h1>
      </S.HomeContainer>
      <AboutSection />
      <StudySection />
      <ProjectsSection />
      <BlogSection />
      <Contact />
    </>
  )
}
