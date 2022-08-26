import './styles/global/styles.css'

import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global/global'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Sidebar } from './components/Sidebar'
import { lazy, Suspense, useEffect, useState } from 'react'
import { MobileMenu } from './components/MobileMenu'
const AboutLazy = lazy(() =>
  import('./components/apps/AboutApp').then((module) => ({
    default: module.AboutApp,
  }))
)
const StudyLazy = lazy(() =>
  import('./components/apps/StudyApp').then((module) => ({
    default: module.StudyApp,
  }))
)
const ProjectsLazy = lazy(() =>
  import('./components/apps/ProjectsApp').then((module) => ({
    default: module.ProjectsApp,
  }))
)

export const App = () => {
  const [screen, setScreen] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setScreen(window.innerWidth)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        {screen <= 1280 ? <MobileMenu /> : <Sidebar />}
        <Suspense fallback={<div>Loading</div>}>
          <Routes>
            <Route path='/about' element={<AboutLazy />} />
            <Route path='/study' element={<StudyLazy />} />
            <Route path='/projects' element={<ProjectsLazy />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </Suspense>
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  )
}
