import React, { useEffect, useState, useContext } from 'react'
import { HeaderContainer, Heading, Logo, UserDetails, LogoutButton, MainSection, Timer } from 'styles/components/Header'
import logo from 'assets/images/witslogo.svg'
import { useNavigate } from 'react-router-dom'
import ROUTES from 'routes'
import { AnswerContext } from 'context/answers'
import usePost from 'hooks/usePost'

const Header = () => {
  const { answers } = useContext(AnswerContext)
  const navigate = useNavigate()
  const [counter, setCounter] = useState(1800)
  const minutes = Math.floor(counter / 60)
  const seconds = counter % 60
  const { mutateAsync } = usePost()

  const handleSubmit = () => {
    const submitTime = new Date(Date.now())
    mutateAsync({
      url: 'test/submitAssignment',
      payload: { userData: { endTime: submitTime.toUTCString(), scoreDetails: answers } },
      token: true,
    })
  }

  useEffect(() => {
    if (window.location.pathname === '/test' || window.location.pathname === '/WIL') {
      counter > 0 && setTimeout(() => setCounter(counter - 1), 1000)
    }

    if (counter === 0) {
      handleSubmit()
      navigate(`${ROUTES?.THANKYOU?.LINK}`, { replace: true })
    }
  }, [counter])

  const LogoutBtn = () => {
    window?.localStorage.clear()
    navigate(`${ROUTES?.ADMIN?.LINK}`, { replace: true })
  }

  return (
    <HeaderContainer>
      <Logo>
        <img src={logo} />
      </Logo>
      <MainSection>
        <Heading>WIL HIRING TEST </Heading>
        {(window.location.pathname === '/test' || window.location.pathname === '/WIL') && (
          <Timer>
            {minutes}m: {seconds}s
          </Timer>
        )}
      </MainSection>
      <UserDetails>
        {window.location.pathname === '/admin/dashboard' && (
          <LogoutButton onClick={() => navigate('/admin/dashboard/questions')}>Question Directory</LogoutButton>
        )}
        {window.location.pathname === '/admin/dashboard' && (
          <LogoutButton onClick={() => LogoutBtn()}>Logout</LogoutButton>
        )}
      </UserDetails>
    </HeaderContainer>
  )
}

export default Header
