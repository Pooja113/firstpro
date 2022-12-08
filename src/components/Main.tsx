import React, { useEffect, useState } from 'react'
import { InnerContainer, MainContainer, SaveButton, SubmitContainer } from 'styles/components/Main'
//import CodeQuestion from './CodeQuestion'
//import MultiSelectionQues from './MultiSelectionQues'
import Question from './Question'
import { useNavigate, useLocation } from 'react-router-dom'
import ROUTES from 'routes'
import usePost from 'hooks/usePost'

const Main = () => {
  const [answers, setAnswers] = useState<{ questionId: string, key: number[] }[]>([])
  const { mutateAsync } = usePost()
  const navigate = useNavigate()
  const { state } = useLocation()
  // @ts-ignore
  const { test } = state

  useEffect(() => {
    document.addEventListener('contextmenu', (event) => event.preventDefault())

    window.onblur = () => {
      navigate(`${ROUTES?.SORRY?.LINK}`, { replace: true })
    }

    window.onload = () => {
      navigate(`${ROUTES?.SORRY?.LINK}`, { replace: true })
    }

    window.history.replaceState(null, '', '/WIL')
  }, [])

  const handleSubmit = () => {
    const submitTime = new Date(Date.now())
    mutateAsync({
      url: 'test/submitAssignment',
      payload: { userData: { endTime: submitTime.toUTCString(), scoreDetails: answers } }
    })
    navigate(`${ROUTES?.THANKYOU?.LINK}`, { replace: true })
  }

  const getAnswers = (questionId: string, key: number[]) => {
    setAnswers([...answers, { questionId: questionId, key: key }])
  }

  return (
    <MainContainer>
      <InnerContainer>
        {test.map((quiz: any, index: number) => (
          <Question key={`question-no-${index}`} data={quiz} answerFunc={getAnswers} />
        ))}
        <SubmitContainer>
          <SaveButton onClick={handleSubmit}>Submit</SaveButton>
        </SubmitContainer>
      </InnerContainer>
    </MainContainer>
  )
}

export default Main
