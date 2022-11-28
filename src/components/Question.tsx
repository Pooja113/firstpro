import React from 'react'
import { EachQuestion, AnswerList, Answer, ClickSingleAnswer, AnswerLabel } from 'styles/components/Question'

const Question = () => {
  return (
    <>
      <EachQuestion>1. Identify the correct extension of the user-defined header file in C++.</EachQuestion>
      <AnswerList>
        <Answer>
          <ClickSingleAnswer />
          <AnswerLabel>.cpp</AnswerLabel>
        </Answer>
        <Answer>
          <ClickSingleAnswer />
          <AnswerLabel>.hf</AnswerLabel>
        </Answer>
        <Answer>
          <ClickSingleAnswer />
          <AnswerLabel>.h</AnswerLabel>
        </Answer>
        <Answer>
          <ClickSingleAnswer />
          <AnswerLabel>.hg</AnswerLabel>
        </Answer>
      </AnswerList>
    </>
  )
}

export default Question
