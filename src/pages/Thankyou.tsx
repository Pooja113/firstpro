import Footer from 'components/Footer'
import Header from 'components/Header'
import Score from 'components/Score'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ROUTES from 'routes'

const Thankyou = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.onblur = () => {
      navigate(`${ROUTES?.THANKYOU?.LINK}`, { replace: true })
    }
  }, [])
  return (
    <>
      <Header />
      <Score />
      <Footer />
    </>
  )
}

export default Thankyou
