import React, { useEffect } from 'react'
import { InnerContainer, MainContainer, SaveButton, SubmitContainer } from 'styles/components/Main'
import CodeQuestion from './CodeQuestion'
import MultiSelectionQues from './MultiSelectionQues'
import Question from './Question'
import { useNavigate } from 'react-router-dom'
import ROUTES from 'routes'

const Main = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.history.replaceState(null, '', '/')

    window.onblur = () => {
      navigate(`${ROUTES?.THANKYOU?.LINK}`, { replace: true })
    }
  }, [])
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
