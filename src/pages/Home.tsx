import Footer from 'components/Footer'
import Header from 'components/Header'
import Main from 'components/Main'
import React, { useEffect } from 'react'
import VideoRecord from 'components/VideoRecord'

const Home = () => {
  const elem: any = document.documentElement

  useEffect(() => {
    if (elem.requestFullscreen) {
      elem.requestFullscreen()
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen()
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen()
    }
  }, [])

  useEffect(() => {
    document.onkeydown = function () {
      return false
    }
  }, [])
  return (
    <>
      <Header />
      <Main />
      <VideoRecord />
      <Footer />
    </>
  )
}

export default Home
