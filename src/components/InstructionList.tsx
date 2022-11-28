import React from 'react'
import {
  InstructionHeader,
  InstructionContainer,
  InstructionBody,
  StartButton,
  MainContainer,
  ButtonContainer,
  EachInstruction,
  SubHeadings,
  TestTime,
  TestMarks,
  InstructionHeading,
} from 'styles/components/InstructionList'

const InstructionList = () => {
  return (
    <MainContainer>
      <InstructionContainer>
        <InstructionHeader>Instructions before Test</InstructionHeader>
        <SubHeadings>
          <TestTime>Duration: 120 minutes</TestTime> <TestMarks>Total Marks: 50 minutes</TestMarks>
        </SubHeadings>
        <InstructionBody>
          <InstructionHeading></InstructionHeading>
          <EachInstruction>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio placeat aliquam nulla neque eos tempore.
            Excepturi sint dignissimos ut molestiae qui, a consequatur quis culpa molestias tempora repellat, asperiores
            corrupti
          </EachInstruction>
          <EachInstruction>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio placeat aliquam nulla neque eos tempore.
            Excepturi sint dignissimos ut molestiae qui, a consequatur quis culpa molestias tempora repellat, asperiores
            corrupti
          </EachInstruction>
          <EachInstruction>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio placeat aliquam nulla neque eos tempore.
            Excepturi sint dignissimos ut molestiae qui, a consequatur quis culpa molestias tempora repellat, asperiores
            corrupti
          </EachInstruction>
          <EachInstruction>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio placeat aliquam nulla neque eos tempore.
            Excepturi sint dignissimos ut molestiae qui, a consequatur quis culpa molestias tempora repellat, asperiores
            corrupti
          </EachInstruction>
          <EachInstruction>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio placeat aliquam nulla neque eos tempore.
            Excepturi sint dignissimos ut molestiae qui, a consequatur quis culpa molestias tempora repellat, asperiores
            corrupti
          </EachInstruction>
          <EachInstruction>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio placeat aliquam nulla neque eos tempore.
            Excepturi sint dignissimos ut molestiae qui, a consequatur quis culpa molestias tempora repellat, asperiores
            corrupti
          </EachInstruction>
        </InstructionBody>
        <ButtonContainer>
          <StartButton>Start</StartButton>
        </ButtonContainer>
      </InstructionContainer>
    </MainContainer>
  )
}

export default InstructionList
