import React, { useEffect, useState } from 'react'
import {
  HeaderContainer,
  Heading,
  Logo,
  UserDetails,
  LogoutButton,
  // UserName,
  // UserCourse,
  // UserCollege,
  MainSection,
  Timer,
} from 'styles/components/Header'
import logo from 'assets/images/witslogo.svg'
import { useNavigate } from 'react-router-dom'
import ROUTES from 'routes'

const Header = () => {
  const navigate = useNavigate()
  const [counter, setCounter] = useState(1800)
  const minutes = Math.floor(counter / 60)
  const seconds = counter % 60

  useEffect(() => {
    if (window.location.pathname === '/test' || window.location.pathname === '/WIL') {
      counter > 0 && setTimeout(() => setCounter(counter - 1), 1000)
    }

    if (counter === 0) {
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
        {window.location.pathname === '/test' || window.location.pathname === '/WIL' ? (
          <Timer>
            {minutes}m: {seconds}s
          </Timer>
        ) : (
          ''
        )}
      </MainSection>
      <UserDetails>
        {/* <UserName>Full Name</UserName>
        <UserCourse>Course Name</UserCourse>
        <UserCollege>College Name</UserCollege> */}
        {window.location.pathname === '/admin/dashboard' ? (
          <LogoutButton onClick={() => LogoutBtn()}>Logout</LogoutButton>
        ) : (
          ''
        )}
      </UserDetails>
    </HeaderContainer>
  )
}

export default Header
