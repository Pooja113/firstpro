import React from 'react'
import { ErrorHeader, MainContainer, InnerContainer, ThanksContainer } from 'styles/components/ErrorComponent'

const ErrorComponent = () => (
  <MainContainer>
    <InnerContainer>
      <ThanksContainer>
        <ErrorHeader>YOU HAVE ALREADY SUBMITTED THE TEST</ErrorHeader>
      </ThanksContainer>
    </InnerContainer>
  </MainContainer>
)

export default ErrorComponent
