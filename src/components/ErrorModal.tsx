import React from 'react'
import Modal from 'react-modal'

import { ModalTitle } from '../styles/components/ErrorModal'

const ErrorModal = ({ isOpen, close }: any) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={close} contentLabel="Example Modal">
      <button onClick={close}>close</button>
      <ModalTitle>Sorry! you have already given the test</ModalTitle>
    </Modal>
  )
}

export default ErrorModal
