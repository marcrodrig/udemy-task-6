import React from 'react'
import { createPortal } from 'react-dom'
import { ModalBodyProps, ModalFooterProps, ModalHeaderProps, ModalProps } from './interface'
import './style.css'

const Modal : React.FC<ModalProps> = ({show, onClickOutsideModalBody, children}) => {
  const modauUI = createPortal(
    <div className="modal-container">
      <div className="modal-overlay" onClick={onClickOutsideModalBody}/>
      <div className="modal-body">
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')!
  )
  return show ? modauUI : null
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({ children, className }) => {
  return (
      <div className={`modal-header ${className || ''}`}>
          {children}
      </div>
  )
}

export const ModalBody: React.FC<ModalBodyProps> = ({ children, className }) => {
  return (
      <div className={`modal-body-children ${className || ''}`}>
          {children}
      </div>
  )
}

export const ModalFooter: React.FC<ModalFooterProps> = ({ children, className }) => {
  return (
      <div className={`modal-footer ${className || ''}`}>
          {children}
      </div>
  )
}

export default Modal