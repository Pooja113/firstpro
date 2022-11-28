import React from 'react'
import { CodeContainer } from 'styles/components/CodeQuestion'
import { EachQuestion, AnswerList, Answer, ClickSingleAnswer, AnswerLabel } from 'styles/components/Question'
const code = `
    print(
        "Hello, World!"
    )
`

const CodeQuestion = () => {
  return (
    <>
      <EachQuestion>
        2. Identify the correct extension of the user-defined header file in C++.
        <CodeContainer>
          <pre>{code}</pre>
        </CodeContainer>
      </EachQuestion>

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

export default CodeQuestion
