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

const Sorry = () => {
  return (
    <MainContainer>
      <InnerContainer>
        <SorryImage src={sadface} />
        <SorryContainer>
          <SorryHeading>Oops! </SorryHeading>
          <SorrySubHeading>The exam got submitted automatically.</SorrySubHeading>
          <SorrySubHeading>If you have faced any issue please talk to the invigilator</SorrySubHeading>
          <ContactContainer>
            <ContactName>Invigilator : 824729184217</ContactName>
            <ContactName>Email : email@email.com</ContactName>
          </ContactContainer>
        </SorryContainer>
      </InnerContainer>
    </MainContainer>
  )
}

export default Sorry
