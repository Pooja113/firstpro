import React, { createContext } from 'react'

interface IAnswerContext {
  answers: IAnswer[]
  setAnswers: React.Dispatch<React.SetStateAction<IAnswer[]>>
}

const defaultState = {
  answers: [{ questionId: '', key: [] }],
  setAnswers: () => null,
}
const AnswerContext = createContext<IAnswerContext>(defaultState)
export { AnswerContext }
