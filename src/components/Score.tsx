import React from 'react'
import {
  InnerContainer,
  MainContainer,
  ThanksContainer,
  Thanksheading,
  ThanksImage,
  ThanksSubHeading,
} from 'styles/components/Score'
import ok from 'assets/images/ok.png'

const Score = () => {
  return (
    <MainContainer>
      <InnerContainer>
        <ThanksContainer>
          <ThanksImage src={ok} />
          <Thanksheading>Thank you</Thanksheading>
          <ThanksSubHeading>
            Thank you for giving the test. Our team will soon connect with you. Please check your email for further
            instructions.
          </ThanksSubHeading>
        </ThanksContainer>
      </InnerContainer>
    </MainContainer>
  )
}

export default Score
