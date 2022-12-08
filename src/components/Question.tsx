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
  const handleClick: ReactEventHandler<HTMLInputElement> = (evnt) => {
    if (!evnt.currentTarget.checked) {
      props.answerFunc(evnt.currentTarget.id, [-1])
    } else {
      props.answerFunc(evnt.currentTarget.id, [evnt.currentTarget.value])
    }
  }

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
