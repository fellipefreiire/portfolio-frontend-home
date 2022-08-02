import { mount } from 'about/AboutApp'
import { useEffect, useRef } from 'react'

export const AboutApp = () => {
  const ref = useRef(null)

  useEffect(() => {
    mount(ref.current!)
  }, [])

  return <section ref={ref} />
}
