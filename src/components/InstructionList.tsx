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
// import usePatch from 'hooks/usePatch'
import Modal from 'components/Modal'

import instructions from '../assets/data/instruction.json'
import usePost from 'hooks/usePost'
import ErrorModal from './ErrorModal'
import 'react-html5-camera-photo/build/css/index.css'
import { useReactMediaRecorder } from 'react-media-recorder'

const InstructionList = () => {
  const navigate = useNavigate()
  const [isChecked, setIsChecked] = useState(false)
  const { startRecording } = useReactMediaRecorder({ video: true })
  const { mutateAsync } = usePost()
  const [modal, setModal] = useState(false)
  const [showCamera, setShowCamera] = useState(false)

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
            I have read all the instructions.
          </ConfirmConatiner>
        </InstructionBody>
        <ButtonContainer>
          <StartButton
            disabled={!isChecked}
            onClick={() => {
              startTest()
              startRecording()
              showCameraModal()
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
