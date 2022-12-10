import styled from 'styled-components'

export const MainContainer = styled.div`
  background: #f9f1d2;
  padding: 20px;
`

export const InstructionHeader = styled.h1`
  display: flex;
  justify-content: center;
`

export const BackButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`

export const BackButton = styled.button`
  background-color: #2d4195;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  color: #fff;
  min-width: 100px;
  padding: 10px;

  :hover {
    background-color: #22347b;
  }
`

export const SubHeadings = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1rem;
  font-weight: 700;
`

export const TestTime = styled.div`
  background: #f9f1d2;
  padding: 10px;
`

export const TestMarks = styled.div`
  background: #f9f1d2;
  padding: 10px;
`
export const InstructionHeading = styled.h3`
  padding: 5px 10px;
`

export const ConfirmConatiner = styled.div`
  padding: 15px 30px;
  border-top: 1px solid;
`

export const ConfirmCheckbox = styled.input``

export const InstructionContainer = styled.div`
  background: #fff;
  width: 70%;
  margin: 0 auto;
  border-radius: 10px 10px 0 0;
  padding: 20px;
  min-height: 68vh;
`
export const InstructionBody = styled.div``
export const EachInstruction = styled.li`
  list-style: auto;
  padding: 5px 30px 30px;
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const StartButton = styled.button`
  background-color: #2d4195;
  color: #fff;
  border-radius: 10px;
  padding: 18px 70px;
  border: none;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;

  :disabled {
    opacity: 0.6;
  }

  :disabled:hover {
    opacity: 0.6;
    background-color: #2d4195;
    cursor: default;
  }

  :hover {
    background-color: #ffb700;
  }
`
