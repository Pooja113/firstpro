import React, { useContext, useEffect } from 'react'
import { InnerContainer, MainContainer, SaveButton, SubmitContainer } from 'styles/components/Main'
import Question from './Question'
import { useNavigate, useLocation } from 'react-router-dom'
import ROUTES from 'routes'
import usePost from 'hooks/usePost'
import { AnswerContext } from 'context/answers'

const Main = () => {
  const { answers, setAnswers } = useContext(AnswerContext)
  const { mutateAsync } = usePost()
  const navigate = useNavigate()
  const { state } = useLocation()
  const test = (state as any)?.test

  useEffect(() => {
    window.scrollTo(0, 0)

    document.addEventListener('contextmenu', (event) => event.preventDefault())
    window.onblur = () => {
      handleSubmit()
      navigate(`${ROUTES?.SORRY?.LINK}`, { replace: true })
    }

    window.onload = () => {
      handleSubmit()
      navigate(`${ROUTES?.SORRY?.LINK}`, { replace: true })
    }

    window.history.replaceState(null, '', '/WIL')

    return () => {
      document.removeEventListener('contextmenu', (event) => event.preventDefault())
      window.removeEventListener('load', () => {
        handleSubmit()
        navigate(`${ROUTES?.SORRY?.LINK}`, { replace: true })
      })
      window.removeEventListener('blur', () => {
        handleSubmit()
        navigate(`${ROUTES?.SORRY?.LINK}`, { replace: true })
      })
    }
  }, [])

  const handleSubmit = () => {
    const submitTime = new Date(Date.now())
    mutateAsync({
      url: 'test/submitAssignment',
      payload: { userData: { endTime: submitTime.toUTCString(), scoreDetails: answers } },
      token: true,
    })
  }

  const getAnswers = (questionId: string, key: number[]) => {
    setAnswers([...answers, { questionId: questionId, key: key }])
  }

  useEffect(() => {
    window.addEventListener('resize', function () {
      if (document?.fullscreenElement === null) {
        handleSubmit()
        navigate(`${ROUTES?.SORRY?.LINK}`, { replace: true })
      }
    })
  }, [])

  return (
    <MainContainer>
      <InnerContainer>
        {test.map((quiz: any, index: number) => (
          <Question key={`question-no-${index}`} index={index} data={quiz} answerFunc={getAnswers} />
        ))}
        <SubmitContainer>
          <SaveButton
            onClick={() => {
              handleSubmit()
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
