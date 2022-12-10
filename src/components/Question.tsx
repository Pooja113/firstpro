import { ReactEventHandler } from 'react'
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
  const question = props.data.question
  const sliceStartIndex = question.indexOf('<pre>')
  const sliceLastIndex = question.indexOf('</pre>')

  const res = question.slice(sliceStartIndex + 5, sliceLastIndex)

  const handleClick: ReactEventHandler<HTMLInputElement> = (evnt) => {
    if (!evnt.currentTarget.checked) {
      props.answerFunc(evnt.currentTarget.id, [-1])
    } else {
      props.answerFunc(evnt.currentTarget.id, [(+evnt.currentTarget.value + 1).toString()])
    }
  }

  return (
    <>
      {props?.data?.questionCategory}
      {props.data.question.includes('<code><pre>') ? (
        <>
          <EachQuestion>{props.index + 1}. What is the output of the following code?</EachQuestion>
          <CodeContainer>
            <pre>{res}</pre>
          </CodeContainer>
        </>
      ) : (
        <EachQuestion>
          {props.index + 1}. {props.data.question}
        </EachQuestion>
      )}
      <AnswerList>
        {props.data.answers.map((each: any, idx: number) => (
          <Answer key={idx}>
            {props.data.questionType === 'singlechoice' ? (
              <>
                <ClickSingleAnswer
                  id={`${props.data.questionId}`}
                  type="radio"
                  value={idx}
                  name={props.data.questionId}
                  onClick={handleClick}
                />
                <AnswerLabel htmlFor={`${idx}${props.data.questionId}`}>{each}</AnswerLabel>
              </>
            ) : (
              <>
                <ClickAnswer
                  id={`${props.data.questionId}`}
                  type="checkbox"
                  name={`${each}${props.data.questionId}`}
                  value={idx}
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
