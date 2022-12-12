import React from 'react'
import Modal from 'react-modal'

import { ModalTitle } from 'styles/components/ErrorModal'

const customStyles = {
  overlay: { zIndex: '9' },
}

const ErrorModal = ({ isOpen, close, error }: any) => (
  <Modal isOpen={isOpen} onRequestClose={close} contentLabel="Example Modal" style={customStyles}>
    <button onClick={close}>close</button>
    <ModalTitle>{error}</ModalTitle>
  </Modal>
)

export default ErrorModal
