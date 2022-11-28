import React, { useState } from 'react'
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
  ConfirmCheckbox,
  ConfirmConatiner,
} from 'styles/components/InstructionList'

const InstructionList = () => {
  const [isChecked, setIsChecked] = useState(false)

  const handleOnChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <MainContainer>
      <InstructionContainer>
        <InstructionHeader>Instructions before Test</InstructionHeader>
        <SubHeadings>
          <TestTime>Duration: 120 minutes</TestTime> <TestMarks>Total Marks: 50 minutes</TestMarks>
        </SubHeadings>
        <InstructionBody>
          <InstructionHeading>Read the following instructions carefully.</InstructionHeading>
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
          <ConfirmConatiner>
            <ConfirmCheckbox
              type="checkbox"
              name="confirmbox"
              value="confirm"
              checked={isChecked}
              onChange={handleOnChange}
            />
            I have read all the instructions Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil placeat
            aliquam iusto pariatur alias magnam nostrum dicta dignissimos minima quibusdam quo incidunt sit corrupti
            totam aperiam praesentium quam, temporibus consectetur.
          </ConfirmConatiner>
        </InstructionBody>
        <ButtonContainer>
          <StartButton>Start</StartButton>
        </ButtonContainer>
      </InstructionContainer>
    </MainContainer>
  )
}

export default InstructionList
