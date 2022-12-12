import React, { useContext, useEffect, useState } from 'react'
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
import instructions from 'assets/data/instruction.json'
import usePost from 'hooks/usePost'
import ErrorModal from 'components/ErrorModal'
import { LoaderContext } from 'context/loader'
import 'react-html5-camera-photo/build/css/index.css'

const InstructionList = () => {
  const navigate = useNavigate()
  const [isChecked, setIsChecked] = useState(false)
  const { mutateAsync: patchAsync } = usePatch()
  const { mutateAsync } = usePost()
  const [errorModal, setErrorModal] = useState(false)
  const [showCamera, setShowCamera] = useState(false)
  const { setLoader } = useContext(LoaderContext)

  const handleOnChange = () => {
    setIsChecked(!isChecked)
  }

  const startTest = async () => {
    setLoader(true)

    try {
      const response = await mutateAsync({
        url: 'test/startAssignment',
        token: true,
      })

      if (response?.success) {
        setLoader(false)
        return response.testData
      }
    } catch (error: any) {
      setLoader(false)
      setErrorModal(true)
      return { error: error?.response?.data?.errorMessage }
    }
  }

  const showCameraModal = () => {
    setShowCamera(true)
  }

  const handleTakePhoto = async (base64: string) => {
    try {
      await patchAsync({ url: 'user/addPhoto', payload: { photo: base64 }, token: true })
      setShowCamera(false)
      const res = await startTest()
      navigate(`${ROUTES?.TEST?.LINK}`, { replace: true, state: { test: res } })
    } catch (error: any) {
      setErrorModal(true)
    }
  }

  const goBack = () => {
    setShowCamera(false)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <MainContainer>
      <InstructionContainer>
        <Modal isOpen={showCamera} setIsOpen={setShowCamera}>
          <Camera
            onTakePhotoAnimationDone={handleTakePhoto}
            onCameraError={() => {
              setErrorModal(true)
              setShowCamera(false)
            }}
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
          <TestTime>Duration: 30 minutes</TestTime>
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
            onClick={async () => {
              showCameraModal()
            }}
          >
            Start
          </StartButton>
        </ButtonContainer>
      </InstructionContainer>
      <ErrorModal
        isOpen={errorModal}
        error={'An error occured with the camera, please contact invigilator'}
        close={() => {
          setErrorModal(false)
          navigate('/')
          localStorage.removeItem('_token')
        }}
      />
    </MainContainer>
  )
}

export default InstructionList
