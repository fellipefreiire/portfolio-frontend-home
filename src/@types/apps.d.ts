///<reference types="react" />
import { Location } from 'react-router-dom'

interface IMountProps {
  location: Location
  onNavigate: (location: Location) => void
}

declare module 'blog/BlogApp' {
  const mount: (el: HTMLElement, { location, onNavigate }: IMountProps) => void

  export const mount
}
