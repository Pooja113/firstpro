import React from 'react'
import {
  MainContainer,
  InnerContainer,
  SorryContainer,
  SorryHeading,
  SorryImage,
  SorrySubHeading,
  ContactContainer,
  ContactName,
} from 'styles/components/Sorry'
import sadface from 'assets/images/sadface.png'

const Sorry = () => (
  <MainContainer>
    <InnerContainer>
      <SorryImage src={sadface} />
      <SorryContainer>
        <SorryHeading>Oops! </SorryHeading>
        <SorrySubHeading>Seems like you navigated elsewhere, the exam was forcefully submitted.</SorrySubHeading>
        <SorrySubHeading>If you have faced any issue, please talk to the invigilator</SorrySubHeading>
        <ContactContainer>
          <ContactName>Phone Number: +91-8360894961</ContactName>
          <ContactName>Email: hardik.thapa@thewitslab.com</ContactName>
        </ContactContainer>
      </SorryContainer>
    </InnerContainer>
  </MainContainer>
)

export default Sorry
