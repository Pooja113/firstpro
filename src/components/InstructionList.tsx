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
import { useNavigate } from 'react-router-dom'
import ROUTES from 'routes'
import { useReactMediaRecorder } from 'react-media-recorder'

import instructions from '../assets/data/instruction.json'
import usePost from 'hooks/usePost'
import ErrorModal from './ErrorModal'

const InstructionList = () => {
  const navigate = useNavigate()
  const [isChecked, setIsChecked] = useState(false)
  const { startRecording } = useReactMediaRecorder({ video: true })
  const { mutateAsync } = usePost()
  const [modal, setModal] = useState(false)

  const handleOnChange = () => {
    setIsChecked(!isChecked)
  }

  const startTest = async () => {
    try {
      await mutateAsync({
        url: 'test/startAssignment',
        token: true,
      })
      navigate(`${ROUTES?.TEST?.LINK}`, { replace: true })
    } catch (error: any) {
      setModal(true)
      return { error: error?.response?.data?.errorMessage }
    }
  }

  return (
    <MainContainer>
      <InstructionContainer>
        <InstructionHeader>Instructions before Test</InstructionHeader>
        <SubHeadings>
          <TestTime>Duration: 15 minutes</TestTime> <TestMarks>Total Marks: 40 minutes</TestMarks>
        </SubHeadings>
        <InstructionBody>
          <InstructionHeading>Read the following instructions carefully.</InstructionHeading>
          {instructions.map((instruction, i) => (
            <EachInstruction key={i}>{instruction}</EachInstruction>
          ))}
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
          <StartButton
            onClick={() => {
              startTest()
              startRecording()
            }}
          >
            Start
          </StartButton>
        </ButtonContainer>
      </InstructionContainer>
      <ErrorModal isOpen={modal} close={() => setModal(false)} />
    </MainContainer>
  )
}

export default InstructionList
