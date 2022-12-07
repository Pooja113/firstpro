import React, { useState } from 'react'
import Camera from 'react-html5-camera-photo'
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
  BackButton,
  BackButtonContainer,
} from 'styles/components/InstructionList'
import { useNavigate } from 'react-router-dom'
import ROUTES from 'routes'
import usePatch from 'hooks/usePatch'
import Modal from 'components/Modal'

import instructions from '../assets/data/instruction.json'
import 'react-html5-camera-photo/build/css/index.css'

const InstructionList = () => {
  const navigate = useNavigate()
  const [isChecked, setIsChecked] = useState(false)
  const { mutateAsync } = usePatch()
  const [showCamera, setShowCamera] = useState(false)

  const handleOnChange = () => {
    setIsChecked(!isChecked)
  }

  const showCameraModal = () => {
    setShowCamera(true)
  }

  const handleTakePhoto = async (base64: string) => {
    try {
      await mutateAsync({ url: 'user/addPhoto', payload: { photo: base64 }, token: true })
      setShowCamera(false)
      navigate(`${ROUTES?.TEST?.LINK}`, { replace: true })
    } catch (error: any) {
      //TODO: Show error modal
      navigate(`${ROUTES?.TEST?.LINK}`, { replace: true })
    }
  }

  const goBack = () => {
    setShowCamera(false)
  }

  const skip = () => {
    navigate(`${ROUTES?.TEST?.LINK}`, { replace: true })
  }

  return (
    <MainContainer>
      <InstructionContainer>
        <Modal isOpen={showCamera} setIsOpen={setShowCamera}>
          <Camera
            onTakePhotoAnimationDone={handleTakePhoto}
            onCameraError={skip}
            imageCompression={0.65}
            sizeFactor={0.8}
            idealResolution={{ width: 640, height: 480 }}
          />
          <BackButtonContainer>
            <BackButton onClick={goBack}>Go back</BackButton>
          </BackButtonContainer>
        </Modal>
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
            disabled={!isChecked}
            onClick={() => {
              showCameraModal()
            }}
          >
            Start
          </StartButton>
        </ButtonContainer>
      </InstructionContainer>
    </MainContainer>
  )
}

export default InstructionList
