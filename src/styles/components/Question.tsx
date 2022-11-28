import styled from 'styled-components'

export const EachQuestion = styled.div`
  background: #f3f6fd;
  color: #2d4195;
  padding: 18px;
  font-weight: 600;
  font-size: 1.2rem;
`

export const AnswerList = styled.div`
  color: #2d4195;
  padding: 18px;
  font-weight: 600;
  font-size: 1.2rem;
  border-radius: 5px;
`
export const Answer = styled.div`
  display: flex;
  padding: 14px 20px;

  :hover {
    background-color: #f3f6fd;
  }
`

export const ClickSingleAnswer = styled.input`
  width: 1.4rem;
  height: 1.4rem;
  min-width: 1.4rem;
  margin-right: 1rem;
  cursor: pointer;

  /* &[type='radio'] {
    border: 3px solid gray;
  } */
`
export const AnswerLabel = styled.label`
  cursor: pointer;
`
export const ClickAnswer = styled.input`
  width: 1.4rem;
  height: 1.4rem;
  min-width: 1.4rem;
  margin-right: 1rem;
  cursor: pointer;
`

export const CodeContainer = styled.div`
  background-color: #1a1a1a;
  color: #fff;
  padding: 12px 20px;
  font-weight: 600;
`
