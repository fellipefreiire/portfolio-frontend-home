// eslint-disable-next-line import/no-unresolved
import { mount } from 'about/AboutApp'
import { useEffect, useRef } from 'react'
import { useLocation, useNavigate, Location } from 'react-router-dom'

export const AboutApp = () => {
  const ref = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    mount(ref.current, {
      location: location,
      onNavigate: ({ pathname }: Location) => {
        navigate(pathname)
      },
    })
  }, [location, navigate])

  return (
    <>
      <section ref={ref} />
    </>
  )
}
