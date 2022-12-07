import React from 'react'
import Modal from 'react-modal'

import {
  // ModalContainer
  ModalTitle,
} from '../styles/components/ErrorModal'
import { LoaderContainer } from 'styles/components/Loader'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

const ErrorModal = ({ isOpen, close }: any) => {
  return (
    <LoaderContainer>
      <Modal
        isOpen={isOpen}
        //   onAfterOpen={afterOpenModal}
        onRequestClose={close}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={close}>close</button>
        <ModalTitle>Sorry! you have given the test Already</ModalTitle>
      </Modal>
    </LoaderContainer>
  )
}

export default ErrorModal
