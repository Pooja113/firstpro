import React, { ReactElement } from 'react'
import ReactModal from 'react-modal'

interface IModal {
  isOpen: boolean
  setIsOpen: (param: boolean) => void
  children: ReactElement | ReactElement[]
}

const Modal = ({ isOpen = false, setIsOpen, children }: IModal) => {
  const closeModal = () => setIsOpen(false)

  return (
    <ReactModal isOpen={isOpen} onRequestClose={closeModal}>
      {children}
    </ReactModal>
  )
}

export default Modal
