import React, { useEffect } from 'react'
import { InnerContainer, MainContainer, SaveButton, SubmitContainer } from 'styles/components/Main'
//import CodeQuestion from './CodeQuestion'
//import MultiSelectionQues from './MultiSelectionQues'
import Question from './Question'
import { useNavigate } from 'react-router-dom'
import ROUTES from 'routes'
import questions from '../assets/data/question.json'

const Main = () => {
  const navigate = useNavigate()

  useEffect(() => {
    // document.addEventListener('contextmenu', (event) => event.preventDefault())
    // window.onblur = () => {
    //   navigate(`${ROUTES?.THANKYOU?.LINK}`, { replace: true })
    // }
    // window.onload = () => {
    //   navigate(`${ROUTES?.THANKYOU?.LINK}`, { replace: true })
    // }
    // window.history.replaceState(null, '', '/WIL')
  }, [])

  return (
    <MainContainer>
      <InnerContainer>
        {questions.map((quiz: any, index: number) => (
          <Question key={`question-no-${index}`} data={quiz} />
        ))}
        <SubmitContainer>
          <SaveButton
            onClick={() => {
              navigate(`${ROUTES?.THANKYOU?.LINK}`, { replace: true })
            }}
          >
            Submit
          </SaveButton>
        </SubmitContainer>
      </InnerContainer>
    </MainContainer>
  )
}

export default Main
