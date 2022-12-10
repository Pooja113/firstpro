import React from 'react'
import {
  MainContainer,
  InnerContainer,
  SorryContainer,
  SorryHeading,
  SorryImage,
  SorrySubHeading,
} from 'styles/components/Sorry'
import sadface from 'assets/images/sadface.png'

const Sorry = () => {
  return (
    <MainContainer>
      <InnerContainer>
        <SorryImage src={sadface} />
        <SorryContainer>
          <SorryHeading>Oops! </SorryHeading>
          <SorrySubHeading>Seems like you navigated elsewhere, the exam was forcefully submitted.</SorrySubHeading>
          <SorrySubHeading>If you have faced any issue, please talk to the invigilator</SorrySubHeading>
        </SorryContainer>
      </InnerContainer>
    </MainContainer>
  )
}

export default Sorry
