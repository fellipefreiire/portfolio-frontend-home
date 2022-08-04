// eslint-disable-next-line import/no-unresolved
import { mount } from 'study/StudyApp'
import { useEffect, useRef } from 'react'
import { useLocation, useNavigate, Location } from 'react-router-dom'

export const StudyApp = () => {
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
