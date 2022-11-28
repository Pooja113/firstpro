import React from 'react'
import {
  HeaderContainer,
  Heading,
  Logo,
  UserDetails,
  UserName,
  UserCourse,
  UserCollege,
  Timer,
  MainSection,
} from 'styles/components/Header'
import logo from 'assets/images/witslogo.svg'

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <img src={logo} />
      </Logo>
      <MainSection>
        <Heading>WIL HIRING TEST </Heading>
        <Timer>4 m 57 s</Timer>
      </MainSection>
      <UserDetails>
        <UserName>Full Name</UserName>
        <UserCourse>Course Name</UserCourse>
        <UserCollege>College Name</UserCollege>
      </UserDetails>
    </HeaderContainer>
  )
}

export default Header
