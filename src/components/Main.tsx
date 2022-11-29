import React, { useEffect } from 'react'
import { InnerContainer, MainContainer, SaveButton, SubmitContainer } from 'styles/components/Main'
//import CodeQuestion from './CodeQuestion'
//import MultiSelectionQues from './MultiSelectionQues'
import Question from './Question'
import { useNavigate } from 'react-router-dom'
import ROUTES from 'routes'

const Main = () => {
  const navigate = useNavigate()

  useEffect(() => {
    document.addEventListener('contextmenu', (event) => event.preventDefault())

    window.onblur = () => {
      navigate(`${ROUTES?.THANKYOU?.LINK}`, { replace: true })
    }

    window.onload = () => {
      navigate(`${ROUTES?.THANKYOU?.LINK}`, { replace: true })
    }

    window.history.replaceState(null, '', '/WIL')
  }, [])
  const code = ` print(
      "Hello, World!"
  )
  `
  const quizTests = [
    {
      question: '1. Identify the correct extension of the user-defined header file in C++.',
      answers: ['.cpp', '.hf', '.h', '.hg'],
      questionId: '01',
      questionType: 'singlechoice',
    },
    {
      question: '2. What is meant by a polymorphism in C++?',
      answers: [
        'class having only single form',
        'class having four forms',
        'class having many forms',
        'class having two forms',
      ],
      questionId: '02',
      questionType: 'singlechoice',
    },
    {
      question: '3. What is meant by a polymorphism in C++?',
      answers: [
        'class having only single form',
        'class having only single form',
        'class having many forms',
        'class having two forms',
      ],
      questionId: '03',
      questionType: 'mutichoice',
    },
    {
      question: '4. What is meant by a polymorphism in C++?',
      answers: [
        'class having only single form',
        'class having only single form',
        'class having many forms',
        'class having two forms',
      ],
      questionId: '03',
      questionType: 'mutichoice',
      code: code,
    },
  ]
  return (
    <MainContainer>
      <InnerContainer>
        {quizTests.map((quiz: any, index: number) => (
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
