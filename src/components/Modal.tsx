import React, { ReactElement } from 'react'
import ReactModal from 'react-modal'

interface IModal {
  isOpen: boolean
  setIsOpen: (param: boolean) => void
  children: ReactElement | ReactElement[]
}
const customStyles = {
  overlay: { zIndex: '9' },
}

const Modal = ({ isOpen = false, setIsOpen, children }: IModal) => {
  const closeModal = () => setIsOpen(false)

  return (
    <ReactModal style={customStyles} isOpen={isOpen} onRequestClose={closeModal}>
      {children}
    </ReactModal>
  )
}

export default Modal
