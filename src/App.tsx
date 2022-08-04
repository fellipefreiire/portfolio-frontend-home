import './styles/global/styles.css'

import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global/global'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Sidebar } from './components/Sidebar'
import { lazy, Suspense } from 'react'
const BlogLazy = lazy(() =>
  import('./components/apps/BlogApp').then((module) => ({
    default: module.BlogApp,
  }))
)

export const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <Sidebar />
        <Suspense fallback={<div>Loading</div>}>
          <Routes>
            <Route path='/blog/*' element={<BlogLazy />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </Suspense>
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  )
}
