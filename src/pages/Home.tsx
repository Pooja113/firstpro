import React, { useEffect } from 'react'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Main from 'components/Main'

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
      {/* <VideoRecord /> */}
      <Footer />
    </>
  )
}

export default Home
