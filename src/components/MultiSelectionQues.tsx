import React from 'react'
import { EachQuestion, AnswerList, Answer, ClickAnswer, AnswerLabel } from 'styles/components/MultiSelectionQues'

const MultiSelectionQues = () => {
  return (
    <>
      <EachQuestion>1. Identify the correct extension of the user-defined header file in C++.</EachQuestion>
      <AnswerList>
        <Answer>
          <ClickAnswer />
          <AnswerLabel>.cpp</AnswerLabel>
        </Answer>
        <Answer>
          <ClickAnswer />
          <AnswerLabel>.hf</AnswerLabel>
        </Answer>
        <Answer>
          <ClickAnswer />
          <AnswerLabel>.h</AnswerLabel>
        </Answer>
        <Answer>
          <ClickAnswer />
          <AnswerLabel>.hg</AnswerLabel>
        </Answer>
      </AnswerList>
    </>
  )
}

export default MultiSelectionQues
