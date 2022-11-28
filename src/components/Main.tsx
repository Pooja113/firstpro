import React from 'react'
import { InnerContainer, MainContainer, SaveButton, SubmitContainer } from 'styles/components/Main'
import CodeQuestion from './CodeQuestion'
import MultiSelectionQues from './MultiSelectionQues'
import Question from './Question'

const Main = () => {
  return (
    <MainContainer>
      <InnerContainer>
        <Question />
        <Question />
        <CodeQuestion />
        <MultiSelectionQues />
        <SubmitContainer>
          <SaveButton>Submit</SaveButton>
        </SubmitContainer>
      </InnerContainer>
    </MainContainer>
  )
}

export default Main
