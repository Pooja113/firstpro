import React from 'react'
import {
  EachQuestion,
  AnswerList,
  Answer,
  ClickSingleAnswer,
  AnswerLabel,
  ClickAnswer,
  CodeContainer,
} from 'styles/components/Question'

const Question = (props: any) => {
  return (
    <>
      <EachQuestion>{props.data.question}</EachQuestion>
      {props.data.code && (
        <CodeContainer>
          <pre>{props.data.code}</pre>
        </CodeContainer>
      )}
      <AnswerList>
        {props.data.answers.map((each: any, idx: number) => (
          <Answer key={idx}>
            {props.data.questionType === 'singlechoice' ? (
              <>
                <ClickSingleAnswer
                  id={`${idx}${props.data.questionId}`}
                  type="radio"
                  value={each}
                  name={props.data.questionId}
                />
                <AnswerLabel htmlFor={`${idx}${props.data.questionId}`}>{each}</AnswerLabel>
              </>
            ) : (
              <>
                <ClickAnswer
                  id={`${idx}${props.data.questionId}`}
                  type="checkbox"
                  name={`${each}${props.data.questionId}`}
                  value={each}
                />
                <AnswerLabel htmlFor={`${idx}${props.data.questionId}`}>{each}</AnswerLabel>
              </>
            )}
          </Answer>
        ))}
      </AnswerList>
    </>
  )
}

export default Question
